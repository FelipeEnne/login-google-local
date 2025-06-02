# login-google-local

A sample Node.js project that demonstrates **hybrid authentication**:  
1. **Local login** using a predefined username and password.  
2. **Google OAuth 2.0 login** (link/unlink a Google account for future Google-only authentication).

This README explains the project’s purpose, setup instructions, configuration, and usage details.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Prerequisites](#prerequisites)  
4. [Installation](#installation)  
5. [Environment Variables](#environment-variables)  
7. [Running the Application](#running-the-application)  
8. [Usage Guide](#usage-guide)  
   - [Local Login](#local-login)  
   - [Linking Google Account](#linking-google-account)  
   - [Google-Only Login](#google-only-login)  
   - [Disconnecting (Unlinking) Google Account](#disconnecting-unlinking-google-account)  
   - [Logout](#logout)  
9. [Route Reference](#route-reference)  
10. [Session & Security](#session--security)  
11. [Extending for Production Use](#extending-for-production-use)  
12. [License](#license)

---

## Project Overview

This repository contains a minimal Express/Passport.js application that allows a single hard-coded user (defined via environment variables) to:

- **Authenticate locally** (username/password).
- **Connect (link) a Google account** once logged in locally.
- **Disconnect (unlink) the Google account** when desired.
- **Log in via Google** afterward, without needing to enter username/password again.

The goal is to demonstrate:

1. How to combine **Passport Local Strategy** and **Passport Google OAuth 2.0 Strategy** in the same app, with two separate flows: a “login” flow and a “link” flow.  
2. How to store metadata (e.g., `googleId`) in an in-memory object for development/testing.  
3. How to protect routes with a simple `ensureAuthenticated` middleware.  
4. How to configure callback URLs correctly in both your Google Cloud Console and in the local `.env`.

---

## Features

- **Local authentication** via `passport-local`  
- **Google OAuth 2.0** (login + link/unlink) via `passport-google-oauth20`  
- Session management with `express-session`  
- Simple in-memory user storage (for demo/testing)  
- Step-by-step linking and unlinking of a Google account  
- Clear HTML pages served directly from Express (no template engine)  

---

## Prerequisites

- **Node.js** (v14 or higher recommended)  
- An active **Google Cloud Platform** project with OAuth 2.0 credentials created  
- A desktop browser (Chrome/Firefox/Edge) for testing  
- Basic familiarity with environment variables (`.env`)  

---

## Installation

1. **Clone the repository** 
   ```bash
   git clone https://github.com/yourusername/login-google-local.git
   cd login-google-local

2. **Initialize package.json**   
   ```bash
   npm i

4. **Create a .env file in the project root**   

## Environment Variables

Create a file named .env at the root of the project, exemple .local-env

**Note:**

* Replace testuser and testpass with whatever username/password you like.

* SESSION_SECRET should be a random string (for securing Express sessions).

* In your Google Cloud Console, under “OAuth 2.0 Client IDs,” add both callback URLs exactly as above:

    http://localhost:3000/auth/google/callback

    http://localhost:3000/connect/google/callback

## Running the Application

1. Make sure you have Node.js installed.

2. Ensure your .env file is populated correctly.

3. In the project root, run:
   ```bash
   node server.js 

3. Open your browser and navigate to:
   ```bash
   http://localhost:3000/login

You will see a login page where you can either:
- Log in with username/password.
- Log in directly with Google (only after you have linked a Google account).

## Usage Guide

### Local Login

1. Go to `http://localhost:3000/login`.
2. Enter the **Username** and **Password** defined in your `.env` (e.g., `testuser` / `testpass`).
3. Click **Login**.
4. If the credentials match, you will be redirected to the Dashboard.

### Linking Google Account

1. After a successful local login, you arrive at the Dashboard.  
2. If your Google account is not yet linked, you will see a button:  

3. Click **Connect Google**.  
- This triggers `GET /connect/google`, which redirects you to Google’s consent screen.  
4. Log in (or select) your Google account and accept the requested scopes (`profile` + `email`).  
5. After consenting, Google redirects back to `GET /connect/google/callback`.  
6. The app stores your `googleId` in memory.  
7. You’re redirected back to the Dashboard, which now shows **Google linked: Yes**.

### Google-Only Login

1. If you have already linked a Google account:  
1. Log out from the Dashboard (click **Logout**).  
2. Visit `http://localhost:3000/login`.  
3. Instead of username/password, click **Login with Google**.  
2. Google OAuth flow begins:  
- Since your `googleId` matches the signed-in Google user, Passport authenticates you and sets up the session.  
3. You are redirected to the Dashboard—no need to type any local credentials.

### Disconnecting (Unlinking) Google Account

1. On the Dashboard, if **Google linked: Yes** is displayed, you will see a **Disconnect Google** button.  
2. Click **Disconnect Google** to clear the in-memory `googleId` field.  
3. The Dashboard will refresh, showing **Google linked: No**.  
4. At this point, logging in with Google again will fail (since no local account is associated with that Google user).

### Logout

- At any time (from the Dashboard), click **Logout** to end the session.  
- You will be redirected back to the login page.

## Route Reference

Below is a brief summary of all routes and their purpose:

| Method | Path                        | Description                                                                                  |
| ------ | --------------------------- | -------------------------------------------------------------------------------------------- |
| GET    | `/login`                    | Show login page (username/password + “Login with Google” button)                             |
| POST   | `/login`                    | Process local login via Passport-Local                                                       |
| GET    | `/auth/google`              | Start Google “login” OAuth flow (Passport-Google strategy `google-login`)                    |
| GET    | `/auth/google/callback`     | Callback after Google login attempt; on success → `/dashboard`                                 |
| GET    | `/connect/google`           | Start Google “link” OAuth flow (Passport-Google strategy `google-link`)                       |
| GET    | `/connect/google/callback`  | Callback after Google link attempt; on success → `/dashboard`                                  |
| GET    | `/disconnect/google`        | Unlink (remove) Google account from the local user                                           |
| GET    | `/dashboard`                | Protected page showing link status & navigation links                                        |
| GET    | `/logout`                   | Logout the current user session; redirect to `/login`                                        |

**Note:**

- Both `/auth/google/...` and `/connect/google/...` use Passport’s Google strategy, but with different identifiers (`google-login` vs. `google-link`) so that we can handle login flows vs. linking flows separately.  
- All routes under `/connect/google` and `/dashboard` require the user to be authenticated locally (or via a valid session).

## Session & Security

- `express-session` is used to store the user session in memory (for demo purposes).  
- `passport.serializeUser` / `passport.deserializeUser` only store and retrieve a minimal identifier (`username`) from the session cookie.  
- For a production system, replace the in-memory session store with a persistent store (Redis, Mongo, etc.) and store users in a database rather than in a single in-memory object.

## Extending for Production Use

To turn this demo into a real, multi-user application, consider:

1. **Persistent User Storage**  
- Replace the in-memory user object with a database table (PostgreSQL, MongoDB, MySQL).  
- Store fields like `username`, `passwordHash`, `googleId`, `createdAt`, etc.

2. **Password Hashing**  
- Use a library like `bcrypt` to salt/hash passwords instead of storing plaintext in `.env`.

3. **Enhanced Session Store**  
- Swap the default in-memory session storage for a shared store (Redis, database-backed) to handle multiple simultaneous users reliably.

4. **Improved Error Handling**  
- Add middleware to catch and display authentication errors (e.g., “Invalid credentials,” “No linked Google account,” etc.).

5. **HTTPS & Cookie Security**  
- Serve over HTTPS in production.  
- Add secure flags on cookies and set appropriate `sameSite` policies.

6. **Logging & Monitoring**  
- Integrate a logging library (Winston, Bunyan) to track login attempts, errors, and user link/unlink events.

## License

This project is released under the **MIT License**. Feel free to copy, modify, and distribute as needed.
