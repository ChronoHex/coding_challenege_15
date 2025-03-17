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

    // task 4
    if (riskLevel === 'Low') {
        riskCard.style.backgroundColor = 'green';
    } else if (riskLevel === 'Medium') {
        riskCard.style.backgroundColor = 'yellow';
    } else if (riskLevel === 'High') {
        riskCard.style.backgroundColor = 'red';
    }; // changes color of card based on risk level
    
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

// task 5
document.getElementById('increaseRiskLevels').addEventListener('click', () => {
    const riskCards = document.querySelectorAll('.riskCard');

    riskCards.forEach(card => {
        const riskLevelElement = card.querySelector('.risk-level');
        const riskLevel = riskLevelElement.textContent.split(': ')[1];  // Get the current risk level

        let newRiskLevel;
        if (riskLevel === 'Low') {
            newRiskLevel = 'Medium';
            card.style.backgroundColor = 'yellow';
        } else if (riskLevel === 'Medium') {
            newRiskLevel = 'High';
            card.style.backgroundColor = 'red';
        } else {
            newRiskLevel = 'High';
        }

        // Update the risk level in the DOM
        riskLevelElement.textContent = `Risk Level: ${newRiskLevel}`;
    });
});


// examples
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

addRiskItem("Market Fluctuations", "High", "Finance");

addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");