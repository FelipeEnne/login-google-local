![Sem título-2025-06-02-1855](https://github.com/user-attachments/assets/adeecf3d-f7e8-4943-9d71-5a251277e28c)# login-google-local

A sample Node.js project that demonstrates **hybrid authentication**:  
1. **Local login** using a predefined username and password.  
2. **Google OAuth 2.0 login** (link/unlink a Google account for future Google-only authentication).

![Upl<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801.3280263070391 533.3333740234375" width="801.3280263070391" height="533.3333740234375"><!-- svg-source:excalidraw --><metadata></metadata><defs><style class="style-fonts">
      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="801.3280263070391" height="533.3333740234375" fill="#ffffff"></rect><g stroke-linecap="round" transform="translate(332.66140033047657 10) rotate(0 94.33334350585938 49.333343505859375)"><path d="M24.67 0 C69.46 -0.58, 114.75 0.28, 164 0 M24.67 0 C69.37 1.62, 112.48 1.57, 164 0 M164 0 C182.04 -1.83, 189.84 9.64, 188.67 24.67 M164 0 C179.27 0.08, 188.97 10.15, 188.67 24.67 M188.67 24.67 C188.41 36.06, 189.19 50.65, 188.67 74 M188.67 24.67 C187.76 37.83, 189.15 50.5, 188.67 74 M188.67 74 C190.09 91.75, 181.51 99.42, 164 98.67 M188.67 74 C187.78 92.68, 178.97 99.21, 164 98.67 M164 98.67 C110.25 100.93, 59.73 100.11, 24.67 98.67 M164 98.67 C131.34 99.32, 98.62 98.98, 24.67 98.67 M24.67 98.67 C9.55 99.96, -0.8 90.89, 0 74 M24.67 98.67 C6.11 100.9, 2.29 91.6, 0 74 M0 74 C0.82 65.27, -1.53 55.27, 0 24.67 M0 74 C-0.4 55.23, 0.98 36.58, 0 24.67 M0 24.67 C1.05 9.22, 7.56 -1.81, 24.67 0 M0 24.67 C-0.76 10.29, 7.4 0.21, 24.67 0" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(375.0547871712969 46.833343505859375) rotate(0 51.93995666503906 12.5)"><text x="51.93995666503906" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Login Page</text></g><g stroke-linecap="round" transform="translate(334.99474383633594 249.33334350585938) rotate(0 94.33334350585938 49.333343505859375)"><path d="M24.67 0 C55.21 0.64, 87.37 0.5, 164 0 M24.67 0 C74.56 1.26, 124.19 1.56, 164 0 M164 0 C178.98 -1.65, 190.56 7.14, 188.67 24.67 M164 0 C180.16 -1.55, 190.72 7.01, 188.67 24.67 M188.67 24.67 C190.43 44.1, 189.24 59.69, 188.67 74 M188.67 24.67 C188.45 40.86, 189.12 56.63, 188.67 74 M188.67 74 C186.83 90.17, 182.04 98.25, 164 98.67 M188.67 74 C186.56 91.14, 180.64 96.96, 164 98.67 M164 98.67 C121.58 97.52, 79.28 97.96, 24.67 98.67 M164 98.67 C131.62 98.48, 99 97.52, 24.67 98.67 M24.67 98.67 C8.56 97.89, 1.53 91.21, 0 74 M24.67 98.67 C7.02 98.68, 1.22 88.64, 0 74 M0 74 C-1.35 59.48, 1.87 49.55, 0 24.67 M0 74 C-0.13 61.45, 0.85 49.53, 0 24.67 M0 24.67 C-1.78 9.22, 7.98 1.4, 24.67 0 M0 24.67 C0.3 6.34, 8.11 0.62, 24.67 0" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(377.18812609951954 286.16668701171875) rotate(0 52.13996124267578 12.5)"><text x="52.13996124267578" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Dashboard</text></g><g mask="url(#mask-cJa_EKnQC_NlDE1QP2ry9)" stroke-linecap="round"><g transform="translate(331.9947133187578 55.333343505859375) rotate(0 -19.93502484729879 122.62337468950078)"><path d="M-1.09 0.67 C-8.05 20.41, -41.9 77.35, -41.37 117.94 C-40.83 158.53, -4.98 223.24, 2.11 244.2 M0.53 -0.02 C-6.56 19.95, -42.13 78.56, -41.98 119.45 C-41.84 160.33, -5.75 224.47, 1.41 245.27" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(331.9947133187578 55.333343505859375) rotate(0 -19.93502484729879 122.62337468950078)"><path d="M-15.83 227.16 C-9.05 234.39, -4.55 239.54, 1.41 245.27 M-15.83 227.16 C-11.67 232.53, -6.71 236.01, 1.41 245.27" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(331.9947133187578 55.333343505859375) rotate(0 -19.93502484729879 122.62337468950078)"><path d="M-0.16 220.32 C1.39 229.67, 0.68 237.1, 1.41 245.27 M-0.16 220.32 C-0.13 227.34, 0.75 232.6, 1.41 245.27" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g></g><mask id="mask-cJa_EKnQC_NlDE1QP2ry9"><rect x="0" y="0" fill="#fff" width="475.9947133187578" height="400"></rect><rect x="262.88473559658985" y="160.83334350585938" fill="#000" width="54.21995544433594" height="25" opacity="1"></rect></mask><g transform="translate(262.88473559658985 160.83334350585938) rotate(0 49.17495287486918 17.12337468950078)"><text x="27.10997772216797" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">/login</text></g><g mask="url(#mask-QH59iLXuqisB60gn0phrB)" stroke-linecap="round"><g transform="translate(523.3280873421953 60) rotate(0 24.11100473478507 119.74639941785485)"><path d="M-0.54 -0.2 C7.68 19.27, 48.16 75.45, 48.76 115.63 C49.36 155.8, 10.48 220.02, 3.03 240.84 M1.37 -1.34 C9.56 18.39, 47.54 76.92, 48.21 116.97 C48.89 157.01, 12.72 218.72, 5.42 238.93" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(523.3280873421953 60) rotate(0 24.11100473478507 119.74639941785485)"><path d="M7.36 214.01 C6.31 221.49, 5.53 224.84, 5.42 238.93 M7.36 214.01 C5.72 224.19, 6.16 233.32, 5.42 238.93" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(523.3280873421953 60) rotate(0 24.11100473478507 119.74639941785485)"><path d="M22.93 221.09 C18.06 226.73, 13.39 228.31, 5.42 238.93 M22.93 221.09 C15.52 228.72, 10.21 235.23, 5.42 238.93" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g></g><mask id="mask-QH59iLXuqisB60gn0phrB"><rect x="0" y="0" fill="#fff" width="671.3280873421953" height="400"></rect><rect x="465.85817004483215" y="163.5" fill="#000" width="210.93983459472656" height="25" opacity="1"></rect></mask><g transform="translate(465.85817004483215 163.5) rotate(0 81.58092203214835 16.246399417854846)"><text x="105.46991729736328" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">/auth/google/callback</text></g><g stroke-linecap="round" transform="translate(490.6613392953203 413.3333740234375) rotate(0 150.33334350585938 55)"><path d="M27.5 0 C95.76 -0.34, 164.57 -1.14, 273.17 0 M27.5 0 C81.81 0.28, 136.99 -0.94, 273.17 0 M273.17 0 C292.16 -0.6, 301.03 9.25, 300.67 27.5 M273.17 0 C289.94 0.06, 298.67 7.87, 300.67 27.5 M300.67 27.5 C300.05 40.85, 302.31 51.68, 300.67 82.5 M300.67 27.5 C301.78 41.73, 301.22 56.95, 300.67 82.5 M300.67 82.5 C299.49 100.84, 290.26 110.18, 273.17 110 M300.67 82.5 C301.07 100.4, 289.95 111.73, 273.17 110 M273.17 110 C199.69 110.8, 124.35 111.61, 27.5 110 M273.17 110 C205.14 111.34, 136.64 111.28, 27.5 110 M27.5 110 C9.36 111.41, 1.76 100.06, 0 82.5 M27.5 110 C10.42 109.13, 1.26 102.76, 0 82.5 M0 82.5 C0.06 64.79, -1.07 47.18, 0 27.5 M0 82.5 C-1.02 60.09, 0.06 38.7, 0 27.5 M0 27.5 C-0.1 8.1, 10.78 -1.89, 27.5 0 M0 27.5 C-0.7 8.22, 10.96 -1.32, 27.5 0" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(496.534798157625 443.3333740234375) rotate(0 144.4598846435547 25)"><text x="144.4598846435547" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Link to Google</text><text x="144.4598846435547" y="42.62" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">enables /auth/google/callback</text></g><g mask="url(#mask-7uixtLvVyLc6n7P5Po8-2)" stroke-linecap="round"><g transform="translate(407.6142311060029 349.7261385632862) rotate(0 -101.08796953436485 79.32237096626912)"><path d="M-0.34 0.94 C-47.16 24.92, -294.52 118.11, -281.15 143.32 C-267.78 168.54, 19.69 150.49, 79.86 152.21 M1.68 0.39 C-45.19 24.62, -294.49 119.49, -281.55 144.92 C-268.61 170.35, 19.01 151.3, 79.34 152.96" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(407.6142311060029 349.7261385632862) rotate(0 -101.08796953436485 79.32237096626912)"><path d="M56.05 162.04 C64.23 161.28, 69.43 157.74, 79.34 152.96 M56.05 162.04 C61.51 160.01, 65.44 158.52, 79.34 152.96" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(407.6142311060029 349.7261385632862) rotate(0 -101.08796953436485 79.32237096626912)"><path d="M55.66 144.95 C63.88 149.02, 69.18 150.31, 79.34 152.96 M55.66 144.95 C61.27 146.5, 65.28 148.6, 79.34 152.96" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g></g><mask id="mask-7uixtLvVyLc6n7P5Po8-2"><rect x="0" y="0" fill="#fff" width="869.2108560331055" height="603.0154215563659"></rect><rect x="10" y="480.44184983509604" fill="#000" width="230.83981323242188" height="25" opacity="1"></rect></mask><g transform="translate(10 480.44184983509604) rotate(0 296.52626157163803 -51.393340305540704)"><text x="115.41990661621094" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">connect/google/callback</text></g><g stroke-linecap="round" transform="translate(35.32805682461719 311.3333435058594) rotate(0 57 33)"><path d="M16.5 0 C41.38 -1.04, 63.48 1.55, 97.5 0 M16.5 0 C36.97 0.27, 56.63 -0.17, 97.5 0 M97.5 0 C106.96 0.28, 112.61 5.47, 114 16.5 M97.5 0 C106.74 -0.1, 113.13 7.77, 114 16.5 M114 16.5 C114.01 28.61, 114.35 40.3, 114 49.5 M114 16.5 C113.72 26.27, 113.12 34.24, 114 49.5 M114 49.5 C114.97 62.33, 108.12 65.11, 97.5 66 M114 49.5 C115.39 61.33, 107.03 66.75, 97.5 66 M97.5 66 C76.35 64.48, 56.88 66.71, 16.5 66 M97.5 66 C78.13 67.01, 56.28 66.21, 16.5 66 M16.5 66 C6.45 65.69, 1.56 61.9, 0 49.5 M16.5 66 C5.33 65.99, 0.2 59.34, 0 49.5 M0 49.5 C1.29 37.88, 1.72 24.46, 0 16.5 M0 49.5 C-0.61 38.87, 0.24 27.04, 0 16.5 M0 16.5 C1.57 4.92, 5.7 -1.52, 16.5 0 M0 16.5 C-0.05 6.91, 3.3 0.22, 16.5 0" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(58.338074219636724 331.8333435058594) rotate(0 33.98998260498047 12.5)"><text x="33.98998260498047" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Logout</text></g><g mask="url(#mask-rZ5FYqOb_KI8_0PTk_Ypt)" stroke-linecap="round"><g transform="translate(333.9947133187578 333.3333435058594) rotate(0 -87.80350458468311 5.054530526325124)"><path d="M0.1 -0.6 C-29.08 1.18, -145.92 8.8, -175.19 10.71 M-1.3 1.69 C-30.56 3.14, -146.59 7.74, -175.71 8.96" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(333.9947133187578 333.3333435058594) rotate(0 -87.80350458468311 5.054530526325124)"><path d="M-152.59 -0.54 C-160.36 3.62, -164.94 5.84, -175.71 8.96 M-152.59 -0.54 C-161.61 3.5, -170.69 5.96, -175.71 8.96" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(333.9947133187578 333.3333435058594) rotate(0 -87.80350458468311 5.054530526325124)"><path d="M-151.89 16.55 C-159.87 15.7, -164.65 12.92, -175.71 8.96 M-151.89 16.55 C-161.22 14.2, -170.56 10.26, -175.71 8.96" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g></g><mask id="mask-rZ5FYqOb_KI8_0PTk_Ypt"><rect x="0" y="0" fill="#fff" width="609.9947133187578" height="443.3333435058594"></rect><rect x="209.57473040860157" y="325.8333435058594" fill="#000" width="72.8399658203125" height="25" opacity="1"></rect></mask><g transform="translate(209.57473040860157 325.8333435058594) rotate(0 36.61647832547314 12.554530526325124)"><text x="36.41998291015625" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">/logout</text></g><g stroke-linecap="round"><g transform="translate(67.32805682461719 306) rotate(0 132.8310403039679 -131.18878690116108)"><path d="M0.23 -0.14 C9.85 -35.97, 13.74 -170.78, 58.16 -214.47 C102.59 -258.15, 231.86 -254.31, 266.77 -262.24 M-1.1 -1.26 C8.27 -37.53, 12.43 -173.13, 56.95 -216.49 C101.48 -259.84, 230.82 -253.93, 266.05 -261.4" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(67.32805682461719 306) rotate(0 132.8310403039679 -131.18878690116108)"><path d="M243.44 -250.73 C250.84 -255.24, 259.09 -257.86, 266.05 -261.4 M243.44 -250.73 C249.17 -252.66, 254.06 -256.3, 266.05 -261.4" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(67.32805682461719 306) rotate(0 132.8310403039679 -131.18878690116108)"><path d="M241.88 -267.76 C249.89 -266.49, 258.66 -263.32, 266.05 -261.4 M241.88 -267.76 C248.09 -265.85, 253.33 -265.67, 266.05 -261.4" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g></g><mask></mask></svg>oading Sem título-2025-06-02-1855.svg…]()


This README explains the project’s purpose, setup instructions, configuration, and usage details.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Prerequisites](#prerequisites)  
4. [Installation](#installation)  
5. [Environment Variables](#environment-variables)  
6. [Running the Application](#running-the-application)  
7. [Usage Guide](#usage-guide)  
   - [Local Login](#local-login)  
   - [Linking Google Account](#linking-google-account)  
   - [Google-Only Login](#google-only-login)  
   - [Disconnecting (Unlinking) Google Account](#disconnecting-unlinking-google-account)  
   - [Logout](#logout)  
8. [Session & Security](#session--security)  
9. [Extending for Production Use](#extending-for-production-use)  
10. [License](#license)

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
