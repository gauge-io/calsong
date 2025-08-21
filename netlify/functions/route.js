// Netlify serverless function for HERE API routing
exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    try {
        const HERE_API_KEY = 'yspJL0vEr1fWGBLMsWcNSHjEu74qNQ8M5PYY3stYyO8';
        const { origin, destination, via, transportMode = 'bicycle' } = JSON.parse(event.body);

        console.log('Calculating route:', {
            origin,
            destination,
            via: via ? `${via.length} points` : 'none',
            transportMode
        });

        // Build HERE API URL
        const params = new URLSearchParams({
            'apikey': HERE_API_KEY,
            'transportMode': transportMode,
            'origin': origin,
            'destination': destination,
            'return': 'polyline,summary,actions,instructions'
        });
        
        // Add via points if provided
        if (via && via.length > 0) {
            via.forEach(point => {
                params.append('via', point);
            });
        }
        
        const url = `https://router.hereapi.com/v8/routes?${params}`;
        
        // Call HERE API
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify(data)
            };
        } else {
            console.error('HERE API error:', data);
            return {
                statusCode: response.status,
                headers,
                body: JSON.stringify(data)
            };
        }
        
    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};
