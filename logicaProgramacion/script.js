function convertirDesdeCelsius() {
    const c = parseFloat(document.getElementById('celsius').value);
    
    if (!isNaN(c)) {
        // Celsius a Fahrenheit: (°C * 9/5) + 32
        document.getElementById('fahrenheit').value = ((c * 9/5) + 32).toFixed(2);
        // Celsius a Kelvin: °C + 273.15
        document.getElementById('kelvin').value = (c + 273.15).toFixed(2);
    } else {
        document.getElementById('fahrenheit').value = '';
        document.getElementById('kelvin').value = '';
    }
}

function convertirDesdeFahrenheit() {
    const f = parseFloat(document.getElementById('fahrenheit').value);
    
    if (!isNaN(f)) {
        // Fahrenheit a Celsius: (°F - 32) * 5/9
        const c = (f - 32) * 5/9;
        document.getElementById('celsius').value = c.toFixed(2);
        // Fahrenheit a Kelvin: (°F - 32) * 5/9 + 273.15
        document.getElementById('kelvin').value = (c + 273.15).toFixed(2);
    } else {
        document.getElementById('celsius').value = '';
        document.getElementById('kelvin').value = '';
    }
}

function convertirDesdeKelvin() {
    const k = parseFloat(document.getElementById('kelvin').value);
    
    if (!isNaN(k)) {
        // Kelvin a Celsius: K - 273.15
        const c = k - 273.15;
        document.getElementById('celsius').value = c.toFixed(2);
        // Kelvin a Fahrenheit: (K - 273.15) * 9/5 + 32
        document.getElementById('fahrenheit').value = ((c * 9/5) + 32).toFixed(2);
    } else {
        document.getElementById('celsius').value = '';
        document.getElementById('fahrenheit').value = '';
    }
}
