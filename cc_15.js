// task 1
const riskDashboard = document.getElementById('riskDashboard'); // gets risk dashboard by id
if (!riskDashboard) {
    console.error('Risk Dashboard element not found');
} else {
    console.log('Risk Dashboard loaded'); // prints message
}

// task 2
const riskForm = document.getElementById('riskForm');
if (riskForm) {
    riskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const riskName = document.getElementById('riskName').value;
        const riskLevel = document.getElementById('riskLevel').value;
        const department = document.getElementById('department').value; 

        addRiskItem(riskName, riskLevel, department); // calls function
    }); // records event of risk form
} else {
    console.error('Risk Form element not found');
}

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.classList.add('risk-card');
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
        <button class="resolveButton">Resolve</button>
    `;// creates risk card with variables
    
    if (riskDashboard) {
        riskDashboard.appendChild(riskCard); // appending to risk dashboard
    } else {
        console.error('Risk Dashboard element not found');
    }
    // task 3
    const resolveButton = riskCard.querySelector('.resolveButton');
    resolveButton.addEventListener('click', () => {
        riskDashboard.removeChild(riskCard); // removes risk card
    }); // event resolve button


}; // function to add risk item

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

addRiskItem("Market Fluctuations", "High", "Finance");