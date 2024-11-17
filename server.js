const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "css" and "assets" directories
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Root route ("/") to serve index.html directly at the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// Route for job listings page
app.get('/job-listings.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'job-listings.html'));
});

// Route for login page
app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'login.html'));
});

// Route for signup page
app.get('/signup.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'signup.html'));
});

// Route for job detail page
app.get('/job-detail.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'job-detail.html'));
});

// Route for add job page
app.get('/add-job.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'add-job.html'));
});

// Route for edit job page
app.get('/edit-job.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'edit-job.html'));
});

// Route for view applications page
app.get('/view-applications.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'view-applications.html'));
});

// Route for candidate profile view page
app.get('/candidate-profile.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'candidate-profile.html'));
});

// Route for edit candidate profile page
app.get('/edit-candidate-profile.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'edit-candidate-profile.html'));
});

// Route for recruiter profile view page
app.get('/recruiter-profile.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'recruiter-profile.html'));
});

// Route for edit recruiter profile page
app.get('/edit-recruiter-profile.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'edit-recruiter-profile.html'));
});

// Route for recruiter dashboard page
app.get('/recruiter-dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'recruiter-dashboard.html'));
});

//route for about us page
app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

// Route for contact us page
app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'contact.html'));
});

// Route for the job application form
app.get('/apply-job.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'apply-job.html'));
});


// Wildcard route to catch all other requests and display the 404 page
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'html', '404.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
