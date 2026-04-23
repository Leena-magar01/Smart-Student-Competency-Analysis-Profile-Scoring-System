const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Example API route
app.get('/api/message', (req, res) => {
    res.json({ message: "Backend connected successfully!" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});