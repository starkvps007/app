// Example using Express.js framework
const express = require('express');
const axios = require('axios');
const app = express();

// Endpoint to handle GET requests for redirected URLs
app.get('/redirect', async (req, res) => {
    const originalUrl = req.query.url;

    try {
        // Make a GET request to retrieve the redirected URL
        const response = await axios.get(originalUrl, { maxRedirects: 0 });
        const redirectedUrl = response.headers.location;

        // Respond with the redirected URL
        res.json({ redirectedUrl });
    } catch (error) {
        // Handle errors, e.g., if the URL does not exist or there's a network issue
        console.error('Error fetching redirected URL:', error.message);
        res.status(500).json({ error: 'Failed to fetch redirected URL' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
