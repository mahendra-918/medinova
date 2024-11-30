const apiKey = 'YOUR_API_KEY_HERE';

async function fetchDiseases() {
    const diseases = [
        "Type-2 Diabetes", "Thyroid", "PCOS", "Hypertension", "Asthma",
        "Heart Disease", "Arthritis", "Flu", "Common Cold", "COVID-19",
        "Tuberculosis", "Malaria", "Dengue", "Hepatitis", "Chickenpox",
        "Measles", "Mumps", "Rubella", "Zika Virus", "Ebola", "Fever", "Bronchitis",
        "Pneumonia", "Migraine", "Anemia", "Allergies", "Stomach Flu", "Food Poisoning"
    ];

    const initialDiseases = diseases.slice(0, 5); // Show only the first 5 diseases initially
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = initialDiseases.map(disease => `<span class="category" onclick="navigateToSymptoms('${disease}')">${disease}</span>`).join('');

    const seeMoreButton = document.createElement('button');
    seeMoreButton.textContent = 'See More';
    seeMoreButton.classList.add('see-more-btn'); // Add class for styling
    seeMoreButton.onclick = () => {
        categoriesDiv.innerHTML = diseases.map(disease => `<span class="category" onclick="navigateToSymptoms('${disease}')">${disease}</span>`).join('');
        seeMoreButton.style.display = 'none'; // Hide the button after expanding the list
    };
    categoriesDiv.appendChild(seeMoreButton);
    
    // Create the disease statistics chart
    createDiseaseChart();
}

function searchDiseases() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let categories = document.getElementById('categories');
    let categoryItems = categories.getElementsByClassName('category');

    for (let i = 0; i < categoryItems.length; i++) {
        let categoryName = categoryItems[i].innerText.toLowerCase();
        
        if (categoryName.indexOf(input) > -1) {
            categoryItems[i].style.display = 'inline-block';
        } else {
            categoryItems[i].style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDiseases();
});

function calculateBMI(event) {
    event.preventDefault(); // Prevent form submission

    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bmiResult = document.getElementById('bmiResult');

    if (height && weight) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        bmiResult.textContent = `Your BMI is ${bmi}`;
    } else {
        bmiResult.textContent = 'Please enter valid height and weight';
    }
}

function createDiseaseChart() {
    const ctx = document.getElementById('diseaseChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Type-2 Diabetes', 'Thyroid', 'PCOS', 'Hypertension', 'Asthma'],
            datasets: [{
                label: 'Number of Cases',
                data: [1200, 900, 800, 1100, 600],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
