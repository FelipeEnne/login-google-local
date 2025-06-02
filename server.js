// server.js
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const path = require('path');

const app = express();
const PORT = 3000;

// In-memory user object (single account for demo)
const user = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  googleId: null
};

// ---------- Middleware Setup ----------
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ---------- Passport Serialization ----------
passport.serializeUser((userObj, done) => {
  // We'll store only the username in session
  done(null, userObj.username);
});
passport.deserializeUser((username, done) => {
  // Rebuild the user object from in-memory store
  if (username === user.username) {
    return done(null, user);
  }
  return done(null, false);
});

// ---------- Local Strategy (username/password) ----------
passport.use(
  new LocalStrategy((username, password, done) => {
    if (username === user.username && password === user.password) {
      return done(null, user);
    }
    return done(null, false, { message: 'Invalid credentials' });
  })
);

// ---------- Google OAuth Verify Function ----------
const googleVerify = (req, accessToken, refreshToken, profile, done) => {
  // If req.user exists, it's a linking flow
  if (req.user) {
    // Link Google account
    req.user.googleId = profile.id;
    return done(null, req.user);
  }

  // Otherwise, it's a login-via-Google flow
  if (user.googleId && profile.id === user.googleId) {
    // Found matching linked user
    return done(null, user);
  }

  // No linked account found
  return done(null, false, { message: 'No account linked to this Google user.' });
};

// ---------- Two Instances of GoogleStrategy ----------

// 1) For initial Google LOGIN
passport.use(
  'google-login',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.LOGIN_CALLBACK_URL,
      passReqToCallback: true
    },
    googleVerify
  )
);

// 2) For LINKING Google account after local login
passport.use(
  'google-link',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.LINK_CALLBACK_URL,
      passReqToCallback: true
    },
    googleVerify
  )
);

// ---------- Middleware to Protect Routes ----------
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
}

// ---------- ROUTES ----------

// --- 1) GET /login — mostra o formulário de login local ---
app.get('/login', (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/dashboard');
  }

  // Se não autenticado, envia o formulário HTML
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

// --- 2) POST /login — processa autenticação local ---
app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  })
);

// --- 3) GET /auth/google — inicia login via Google ---
app.get(
  '/auth/google',
  passport.authenticate('google-login', {
    scope: ['profile', 'email']
  })
);

// --- 4) GET /auth/google/callback — callback após login via Google ---
app.get(
  '/auth/google/callback',
  passport.authenticate('google-login', {
    failureRedirect: '/login'
  }),
  (req, res) => {
    // Se login bem‐sucedido, vai para o dashboard
    res.redirect('/dashboard');
  }
);

// --- 5) GET /connect/google — inicia fluxo de link (bind) do Google (precisa estar autenticado local) ---
app.get(
  '/connect/google',
  ensureAuthenticated,
  passport.authenticate('google-link', {
    scope: ['profile', 'email']
  })
);

// --- 6) GET /connect/google/callback — callback após link com Google ---
app.get(
  '/connect/google/callback',
  ensureAuthenticated,
  passport.authenticate('google-link', {
    failureRedirect: '/dashboard'
  }),
  (req, res) => {
    // Após vincular, redireciona ao dashboard
    res.redirect('/dashboard');
  }
);

// --- 7) GET /disconnect/google — desliga (unlink) a conta Google ---
app.get('/disconnect/google', ensureAuthenticated, (req, res) => {
  req.user.googleId = null;
  res.redirect('/dashboard');
});

// --- 8) GET /dashboard — área protegida com opções de conectar/desconectar Google ---
app.get('/dashboard', ensureAuthenticated, (req, res) => {
  const isGoogleLinked = !!req.user.googleId;
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Dashboard</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f9f9f9; text-align: center; padding-top: 80px; }
          a button { padding: 8px 16px; margin: 5px; font-size: 14px; background: #4285F4; color: white; border: none; border-radius: 4px; cursor: pointer; }
          a button:hover { background: #357AE8; }
        </style>
      </head>
      <body>
        <h1>Welcome, ${req.user.username}!</h1>
        <p>Google linked: <strong>${isGoogleLinked ? 'Yes' : 'No'}</strong></p>
        ${isGoogleLinked
          ? `<a href="/disconnect/google"><button>Disconnect Google</button></a>`
          : `<a href="/connect/google"><button>Connect Google</button></a>`
        }
        <br/><br/>
        <a href="/logout"><button>Logout</button></a>
      </body>
    </html>
  `);
});

// --- 9) GET /logout — encerra sessão ---
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
});

// --- 10) Iniciar servidor ---
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
