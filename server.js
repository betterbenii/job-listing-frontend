const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "html" and "css" directories
app.use(express.static(path.join(__dirname, 'html')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// Route for job listings page
app.get('/job-listings', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'job-listings.html'));
});

// Route for login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'login.html'));
});

// Route for signup page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'signup.html'));
});

// Default route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
