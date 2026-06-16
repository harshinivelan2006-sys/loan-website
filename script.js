function searchLoan(){

    let loan =
    document.getElementById("loanSearch")
    .value
    .toLowerCase();

    if(loan.includes("business"))
        window.location.href="business-loan.html";

    else if(loan.includes("personal"))
        window.location.href="personal-loan.html";

    else if(loan.includes("professional"))
        window.location.href="professional-loan.html";

    else if(loan.includes("home"))
        window.location.href="home-loan.html";

    else if(loan.includes("property"))
        window.location.href="lap.html";

    else if(loan.includes("working"))
        window.location.href="working-capital.html";

    else if(loan.includes("auto"))
        window.location.href="auto-loan.html";

    else
        alert("Loan Type Not Found");
}