function getSymptomsFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('symptoms') ? urlParams.get('symptoms').split(',') : [];
}

function showDiet() {
    const selectedSymptoms = getSymptomsFromUrl();

    const dietRecommendations = {
        "Increased thirst": "Drink plenty of water and avoid sugary drinks.",
        "Frequent urination": "Stay hydrated and consult a doctor if symptoms persist.",
        "Hunger": "Eat small, frequent meals that include protein and fiber.",
        "Fatigue": "Consume a balanced diet with iron-rich foods and get enough rest.",
        "Blurred vision": "Incorporate foods rich in vitamin A and consult a healthcare provider.",
        // Add more diet recommendations for other symptoms...
    };

    const foodsToAvoid = {
        "Increased thirst": ["Sugary drinks", "Caffeinated beverages", "Alcohol"],
        "Frequent urination": ["Alcohol", "Caffeine", "Spicy foods"],
        "Hunger": ["Sugary snacks", "Refined carbs", "Processed foods"],
        "Fatigue": ["Sugary foods", "Caffeine", "Fast food"],
        "Blurred vision": ["High-sugar foods", "Trans fats", "Refined carbs"],
        // Add more foods to avoid for other symptoms...
    };

    let dietList = document.getElementById('dietList');
    dietList.innerHTML = selectedSymptoms
        .map(symptom => {
            let recommendation = dietRecommendations[symptom];
            return recommendation ? `<li>${recommendation}</li>` : '';
        })
        .join('');

    let foodsToAvoidDiv = document.getElementById('foodsToAvoid');
    foodsToAvoidDiv.innerHTML = selectedSymptoms
        .flatMap(symptom => foodsToAvoid[symptom] ? foodsToAvoid[symptom].map(food => `<li>${food}</li>`) : [])
        .join('');

    // Create the diet composition chart
    createDietChart();
}

function createDietChart() {
    const ctx = document.getElementById('dietChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Fruits', 'Vegetables', 'Proteins', 'Carbohydrates', 'Fats'],
            datasets: [{
                label: 'Diet Composition',
                data: [20, 30, 25, 15, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',  // Fruits
                    'rgba(54, 162, 235, 0.2)',   // Vegetables
                    'rgba(255, 206, 86, 0.2)',   // Proteins
                    'rgba(75, 192, 192, 0.2)',   // Carbohydrates
                    'rgba(153, 102, 255, 0.2)'   // Fats
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',     // Fruits
                    'rgba(54, 162, 235, 1)',     // Vegetables
                    'rgba(255, 206, 86, 1)',     // Proteins
                    'rgba(75, 192, 192, 1)',     // Carbohydrates
                    'rgba(153, 102, 255, 1)'     // Fats
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('diet.html')) {
        showDiet();
    }
});
