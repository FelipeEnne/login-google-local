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

const user = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  googleId: null
};

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


passport.serializeUser((userObj, done) => {

  done(null, userObj.username);
});

passport.deserializeUser((username, done) => {

  if (username === user.username) {
    return done(null, user);
  }
  return done(null, false);
});


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
  if (req.user) {
    req.user.googleId = profile.id;
    return done(null, req.user);
  }

  if (user.googleId && profile.id === user.googleId) {
    return done(null, user);
  }

  return done(null, false, { message: 'No account linked to this Google user.' });
};

// ---------- GoogleStrategy ----------

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

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
}

// ---------- ROUTES ----------

app.get('/login', (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/dashboard');
  }

  res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  })
);

app.get(
  '/auth/google',
  passport.authenticate('google-login', {
    scope: ['profile', 'email']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google-login', {
    failureRedirect: '/login'
  }),
  (req, res) => {

    res.redirect('/dashboard');
  }
);

app.get(
  '/connect/google',
  ensureAuthenticated,
  passport.authenticate('google-link', {
    scope: ['profile', 'email']
  })
);

app.get(
  '/connect/google/callback',
  ensureAuthenticated,
  passport.authenticate('google-link', {
    failureRedirect: '/dashboard'
  }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

app.get('/disconnect/google', ensureAuthenticated, (req, res) => {
  req.user.googleId = null;
  res.redirect('/dashboard');
});

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

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
