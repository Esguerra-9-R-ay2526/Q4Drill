function classifyConsumption() {
    let kwh = document.getElementById("kwhInput").value;

    // Convert to number
    kwh = Number(kwh);

    // Error check
    if (kwh < 0 || isNaN(kwh)) {
        alert("Please input a non-negative number.");
        return;
    }

    let result = "";

    // Classification
    if (kwh <= 200) {
        result = "Low Consumption";
    } else if (kwh <= 400) {
        result = "Average Consumption";
    } else {
        result = "High Consumption";
    }

    alert(result);
}

