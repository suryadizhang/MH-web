import sqlite3

DB_PATH = "mh-bookings.db"  # Adjust path if your DB is elsewhere

def check_superadmin():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("SELECT username FROM users WHERE role='superadmin'")
    result = cur.fetchone()
    conn.close()
    if result:
        print(f"Superadmin exists: {result[0]}")
    else:
        print("No superadmin account found.")

if __name__ == "__main__":
    check_superadmin()