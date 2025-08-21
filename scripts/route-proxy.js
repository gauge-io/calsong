import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3002;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// HERE API credentials
const HERE_API_KEY = 'yspJL0vEr1fWGBLMsWcNSHjEu74qNQ8M5PYY3stYyO8';

// Route calculation endpoint
app.post('/api/route', async (req, res) => {
    try {
        const { origin, destination, via, transportMode = 'bicycle' } = req.body;
        
        console.log('Calculating route:', { 
            origin, 
            destination, 
            via: via ? `${via.length} points` : 'none',
            transportMode 
        });
        
        // Build HERE v8 API URL
        const params = new URLSearchParams({
            'apikey': HERE_API_KEY,
            'transportMode': transportMode,
            'origin': origin,
            'destination': destination,
            'return': 'polyline,summary,actions,instructions'
        });
        
        // Add via points if provided
        // HERE v8 expects multiple 'via' parameters, not a single pipe-separated string
        if (via && via.length > 0) {
            via.forEach(point => {
                params.append('via', point);
            });
        }
        
        const url = `https://router.hereapi.com/v8/routes?${params}`;
        console.log('API URL:', url.substring(0, 200) + '...');
        
        // Call HERE API
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            console.log('Route calculated successfully');
            res.json(data);
        } else {
            console.error('HERE API error:', data);
            res.status(response.status).json(data);
        }
        
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Geocoding endpoint
app.post('/api/geocode', async (req, res) => {
    try {
        const { address } = req.body;
        
        console.log('Geocoding:', address);
        
        const params = new URLSearchParams({
            'apikey': HERE_API_KEY,
            'q': address
        });
        
        const url = `https://geocode.search.hereapi.com/v1/geocode?${params}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            console.log('Geocoding successful');
            res.json(data);
        } else {
            console.error('Geocoding error:', data);
            res.status(response.status).json(data);
        }
        
    } catch (error) {
        console.error('Geocoding proxy error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'HERE API Proxy is running' });
});

app.listen(PORT, () => {
    console.log(`HERE API Proxy server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  POST /api/route - Calculate route');
    console.log('  POST /api/geocode - Geocode address');
    console.log('  GET /api/health - Health check');
});
