function convertTemperatureRange() {
    var startValue = parseInt(document.getElementById('startValue').value);
    var endValue = parseInt(document.getElementById('endValue').value);
    var scale = document.getElementById('scale').value;
    var results = document.getElementById('results');
    results.innerHTML = ''; // Clear previous results

    for (var temp = startValue; temp <= endValue; temp++) {
        var converted;
        var resultText;
        if (scale === 'C') {
            converted = (temp * 9 / 5) + 32;
            resultText = `${temp}°C is ${converted.toFixed(2)}°F`;
        } else {
            converted = (temp - 32) * 5 / 9;
            resultText = `${temp}°F is ${converted.toFixed(2)}°C`;
        }
        var resultDiv = document.createElement('div');
        resultDiv.className = 'result-item';
        resultDiv.textContent = resultText;
        results.appendChild(resultDiv);
    }
}
