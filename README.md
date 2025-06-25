# 🍱 My Hibachi - Private Hibachi Chef Web App

Welcome to the **My Hibachi** project!  
This is a full-stack web application for a private hibachi chef booking service, featuring a modern **React** frontend (Vite) and a **Python** backend (FastAPI or Flask).  

> This project is open for contributions and is a great opportunity to build your real-life portfolio.

---

## 🔥 Features

- ✅ Mobile-friendly responsive design  
- 📅 Online booking with time slot availability  
- 📜 Menu browsing with upgrades  
- 🤖 AI-powered chatbot  
- ❓ FAQs, customer reviews, and contact forms  
- 📲 Social media integration  
- 💅 Beautiful UI built with React + Bootstrap  
- 🐍 Python backend for:
  - Booking management
  - Authentication and role-based access
  - Database integration
  - Optional OneDrive sync (Graph API)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/my-hibachi.git
cd my-hibachi
```

---

## 🧰 Installation Steps

### 2. Install Frontend Dependencies

```bash
cd MH
npm install
```

### 3. Set Up Backend Environment

```bash
cd ../backend
python -m venv venv
```

#### Activate the Virtual Environment

- **On Windows:**
  ```bash
  venv\Scripts\activate
  ```

- **On Mac/Linux:**
  ```bash
  source venv/bin/activate
  ```

### 4. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 5. Run the Backend

```bash
cd backend
python main.py  # or uvicorn main:app --reload for FastAPI
```

### 6. Run the Frontend

```bash
cd ../MH
npm run dev
```

> - Frontend: http://localhost:5173  
> - Backend: http://localhost:8000

---

## 🚢 Deployment Guide

### Frontend

```bash
npm run build
```

Upload the contents of the `dist/` folder to a host like Netlify, Vercel, or IONOS.

### Backend

Deploy to services like Render, Railway, Heroku, or AWS.

### Deployment Notes

- 🔄 **CORS**: Ensure backend allows requests from frontend domain.
- 🛠️ **.htaccess**: Use for SPA routing in React Router.

---

## 💡 Possible Improvements

- 🔐 Authentication & admin dashboard  
- 💳 Online payments (Stripe, PayPal)  
- 📆 Calendar booking sync  
- ♿ Accessibility (a11y) & SEO improvements  
- 🧪 Automated testing  
- 🤖 AI-powered chatbot for FAQs  
- 🌐 Multi-language support  
- 🐳 Dockerization  
- 🔁 CI/CD workflows (GitHub Actions)  
- ⚠️ Error handling improvements  
- 📊 Analytics tracking

---

## 🤝 How to Contribute

1. **Fork** this repo  
2. **Create a branch** for your contribution  
3. **Submit a pull request**  
4. **Open issues** for bugs or requests

> 🧠 All skill levels welcome! Join the **Coding Temple community** and be credited as a contributor on a real-life portfolio project!

**💬 Add your name and GitHub handle to the `CONTRIBUTORS.md` file to be officially recognized.**

---

## 🌍 Community

- [Instagram](#)
- [Facebook](#)

---

## 📄 License

MIT License

---

# MH Web Backend

## Setup

1. **Clone the repository and navigate to the backend folder.**

2. **Create and activate a virtual environment:**
   ```sh
   python -m venv .venv
   # On Windows PowerShell:
   .venv\Scripts\Activate.ps1
   # On Windows CMD:
   .venv\Scripts\activate.bat
   ```

3. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   - Copy `.env.example` to `.env` (if exists) or edit `.env` directly.
   - Fill in `SECRET_KEY`, `SMTP_USER`, and `SMTP_PASS`.

5. **Run database migrations:**
   ```sh
   alembic upgrade head
   ```

6. **Start the server:**
   ```sh
   uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
   ```

## Testing

```sh
pytest
```

## API Docs

Visit [http://localhost:8000/docs](http://localhost:8000/docs)

## Production

- Use PostgreSQL or MySQL for production deployments.
- Use a process manager (systemd, supervisor, Docker) and a reverse proxy (Nginx, Caddy) for HTTPS.
