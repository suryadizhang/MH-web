import os
import sqlite3
from datetime import datetime
from pathlib import Path

DB_DIR = os.path.join(os.path.dirname(__file__), '..', 'weekly_databases')
os.makedirs(DB_DIR, exist_ok=True)

def get_week_db(date_str: str):
    date = datetime.strptime(date_str, "%Y-%m-%d")
    year, week, _ = date.isocalendar()
    db_path = os.path.join(DB_DIR, f"bookings_{year}-{week:02d}.db")
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            phone TEXT,
            email TEXT,
            address TEXT,
            date TEXT,
            time_slot TEXT,
            contact_preference TEXT,
            created_at TEXT
        )
    """)
    conn.commit()
    return conn

def init_user_db():
    db_path = os.path.join(DB_DIR, "users.db")
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            role TEXT NOT NULL CHECK(role IN ('superadmin', 'admin'))
        )
    """)
    conn.commit()
    return conn

def get_user_db():
    db_path = os.path.join(DB_DIR, "users.db")
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    return conn

DB_PATH = Path(__file__).parent.parent / "mh-bookings.db"

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        c = conn.cursor()
        # Bookings
        c.execute('''
            CREATE TABLE IF NOT EXISTS bookings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                email TEXT NOT NULL,
                address TEXT NOT NULL,
                date TEXT NOT NULL,
                time_slot TEXT NOT NULL,
                contact_preference TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        # Newsletter
        c.execute('''
            CREATE TABLE IF NOT EXISTS newsletter_subscribers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        # Users
        c.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                hashed_password TEXT NOT NULL,
                role TEXT NOT NULL CHECK(role IN ('superadmin', 'admin')),
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()