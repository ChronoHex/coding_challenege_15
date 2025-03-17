// task 1
const riskDashboard = document.getElementById('riskDashboard'); // gets risk dashboard by id
console.log('Risk Dashboard loaded'); // prints message

// task 2
document.getElementById('riskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const riskName = document.getElementById('riskName').value;
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('department').value; 

    addRiskItem(riskName, riskLevel, department); // calls function
}); // records event of risk form

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.classList.add('risk-card');
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
    `;// creates risk card with variables
    
    riskDashboard.appendChild(riskCard); // appending to risk dashboard
}; // function to add risk item

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");