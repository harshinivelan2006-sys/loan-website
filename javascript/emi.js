function calculateEMI() {

    let P = parseFloat(document.getElementById("amount").value);
    let annualRate = parseFloat(document.getElementById("rate").value);
    let years = parseFloat(document.getElementById("years").value);

    if (isNaN(P) || isNaN(annualRate) || isNaN(years) ||
        P <= 0 || annualRate <= 0 || years <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid values.";
        return;
    }

    let R = annualRate / (12 * 100);
    let N = years * 12;

    let EMI =
        (P * R * Math.pow(1 + R, N)) /
        (Math.pow(1 + R, N) - 1);

    document.getElementById("result").innerHTML =
        "Monthly EMI: ₹ " + EMI.toFixed(2);
}