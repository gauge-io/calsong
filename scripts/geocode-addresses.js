#!/usr/bin/env node

/**
 * Geocode addresses from CSV file using Nominatim (OpenStreetMap)
 * This script reads the business addresses and adds latitude/longitude coordinates
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the CSV file
const csvPath = path.join(__dirname, '../public/BATB Addresses - Sheet7.csv');
const outputPath = path.join(__dirname, '../public/businesses-with-coordinates.csv');
const jsonOutputPath = path.join(__dirname, '../public/businesses-geocoded.json');

// Nominatim API endpoint (free, no key required)
const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';

// Rate limiting - Nominatim requires max 1 request per second
const DELAY_MS = 1200; // 1.2 seconds between requests to be safe

// Parse CSV manually (simple parser for our format)
function parseCSV(content) {
    const lines = content.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        // Handle different CSV formats:
        // Format 1: Name,"Address with commas"
        // Format 2: Name,Address without quotes
        
        let name, address;
        
        // Check if address is quoted
        if (line.includes(',"')) {
            const firstComma = line.indexOf(',');
            name = line.substring(0, firstComma).trim();
            address = line.substring(firstComma + 1).trim().replace(/^"|"$/g, '');
        } else {
            // Simple comma split for addresses without quotes
            const firstComma = line.indexOf(',');
            if (firstComma > -1) {
                name = line.substring(0, firstComma).trim();
                address = line.substring(firstComma + 1).trim();
                
                // Add CA 94501/94502 if missing
                if (!address.includes('CA') && !address.includes(',')) {
                    address = address + ', Alameda, CA 94501';
                } else if (!address.includes('Alameda')) {
                    address = address.replace(/CA\s+(\d{5})/, 'Alameda, CA $1');
                }
            }
        }
        
        if (name && address) {
            data.push({
                name: name,
                address: address
            });
        }
    }
    
    return data;
}

// Geocode a single address
async function geocodeAddress(address, businessName) {
    const params = new URLSearchParams({
        q: address,
        format: 'json',
        limit: 1,
        countrycodes: 'us'
    });
    
    const url = `${NOMINATIM_URL}?${params}`;
    
    try {
        console.log(`Geocoding ${businessName}...`);
        
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'AlamedaBusinessRouteOptimizer/1.0'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon),
                display_name: data[0].display_name
            };
        } else {
            console.warn(`No results found for: ${businessName} - ${address}`);
            return null;
        }
    } catch (error) {
        console.error(`Error geocoding ${businessName}:`, error.message);
        return null;
    }
}

// Fallback coordinates for known Alameda streets (if geocoding fails)
function getFallbackCoordinates(address) {
    const alamedaCenter = { lat: 37.7652, lng: -122.2416 };
    
    // Known street coordinates in Alameda
    const streetCoordinates = {
        'park st': { lat: 37.7641, lng: -122.2430 },
        'webster st': { lat: 37.7713, lng: -122.2764 },
        'central ave': { lat: 37.7642, lng: -122.2551 },
        'lincoln ave': { lat: 37.7701, lng: -122.2525 },
        'encinal ave': { lat: 37.7625, lng: -122.2500 },
        'santa clara ave': { lat: 37.7680, lng: -122.2650 },
        'grand st': { lat: 37.7750, lng: -122.2480 },
        'buena vista ave': { lat: 37.7690, lng: -122.2560 },
        'broadway': { lat: 37.7985, lng: -122.2750 },
        'blanding ave': { lat: 37.7720, lng: -122.2880 },
        'bay st': { lat: 37.7680, lng: -122.2800 },
        'oak st': { lat: 37.7740, lng: -122.2750 },
        'harbor bay': { lat: 37.7380, lng: -122.2520 },
        'south shore': { lat: 37.7450, lng: -122.2550 },
        'marina village': { lat: 37.7890, lng: -122.2720 }
    };
    
    const addressLower = address.toLowerCase();
    
    // Check for known streets
    for (const [street, coords] of Object.entries(streetCoordinates)) {
        if (addressLower.includes(street)) {
            // Add small random offset to avoid exact overlaps
            return {
                lat: coords.lat + (Math.random() - 0.5) * 0.002,
                lng: coords.lng + (Math.random() - 0.5) * 0.002
            };
        }
    }
    
    // Default to center of Alameda with random offset
    return {
        lat: alamedaCenter.lat + (Math.random() - 0.5) * 0.01,
        lng: alamedaCenter.lng + (Math.random() - 0.5) * 0.01
    };
}

// Main function
async function main() {
    console.log('Starting geocoding process...\n');
    
    // Read CSV file
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const businesses = parseCSV(csvContent);
    
    console.log(`Found ${businesses.length} businesses to geocode\n`);
    
    const geocodedBusinesses = [];
    let successCount = 0;
    let fallbackCount = 0;
    
    // Process each business
    for (let i = 0; i < businesses.length; i++) {
        const business = businesses[i];
        
        // Try to geocode the address
        const geocoded = await geocodeAddress(business.address, business.name);
        
        let coordinates;
        if (geocoded) {
            coordinates = { lat: geocoded.lat, lng: geocoded.lng };
            successCount++;
            console.log(`✓ ${business.name}: ${coordinates.lat}, ${coordinates.lng}`);
        } else {
            // Use fallback coordinates
            coordinates = getFallbackCoordinates(business.address);
            fallbackCount++;
            console.log(`⚠ ${business.name}: Using fallback ${coordinates.lat}, ${coordinates.lng}`);
        }
        
        geocodedBusinesses.push({
            ...business,
            ...coordinates
        });
        
        // Progress indicator
        if ((i + 1) % 10 === 0) {
            console.log(`\nProgress: ${i + 1}/${businesses.length} completed\n`);
        }
        
        // Rate limiting - wait before next request
        if (i < businesses.length - 1) {
            await new Promise(resolve => setTimeout(resolve, DELAY_MS));
        }
    }
    
    // Write CSV output
    const csvOutput = [
        'Business Name,Business Address,Latitude,Longitude',
        ...geocodedBusinesses.map(b => 
            `"${b.name}","${b.address}",${b.lat},${b.lng}`
        )
    ].join('\n');
    
    fs.writeFileSync(outputPath, csvOutput);
    console.log(`\n✓ CSV file saved to: ${outputPath}`);
    
    // Write JSON output for easier use in JavaScript
    fs.writeFileSync(jsonOutputPath, JSON.stringify(geocodedBusinesses, null, 2));
    console.log(`✓ JSON file saved to: ${jsonOutputPath}`);
    
    // Summary
    console.log('\n=== Geocoding Summary ===');
    console.log(`Total businesses: ${businesses.length}`);
    console.log(`Successfully geocoded: ${successCount}`);
    console.log(`Used fallback coordinates: ${fallbackCount}`);
    console.log(`Success rate: ${((successCount / businesses.length) * 100).toFixed(1)}%`);
}

// Run the script
main().catch(console.error);
