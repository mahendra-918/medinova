

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
}

function navigateToSymptoms(disease) {
    window.location.href = `symptoms.html?disease=${encodeURIComponent(disease)}`;
}

function getDiseaseFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('disease');
}

async function showSymptoms() {
    const disease = getDiseaseFromUrl();
    document.getElementById('diseaseName').textContent = disease;

    const symptomsData = {
        "Type-2 Diabetes": ["Increased thirst", "Frequent urination", "Hunger", "Fatigue", "Blurred vision"],
        "Thyroid": ["Fatigue", "Weight gain", "Cold intolerance", "Constipation", "Dry skin"],
        "PCOS": ["Irregular periods", "Weight gain", "Acne", "Thinning hair", "Excess hair growth"],
        "Hypertension": ["Headaches", "Shortness of breath", "Nosebleeds", "Chest pain", "Dizziness"],
        "Asthma": ["Shortness of breath", "Chest tightness", "Wheezing", "Coughing"],
        "Heart Disease": ["Chest pain", "Shortness of breath", "Pain in the neck, jaw, throat", "Numbness", "Weakness"],
        "Arthritis": ["Joint pain", "Swelling", "Stiffness", "Decreased range of motion"],
        "Flu": ["Fever", "Chills", "Muscle aches", "Cough", "Congestion"],
        "Common Cold": ["Runny nose", "Sore throat", "Cough", "Congestion", "Sneezing"],
        "COVID-19": ["Fever", "Cough", "Shortness of breath", "Fatigue", "Loss of taste or smell"],
        "Tuberculosis": ["Coughing", "Chest pain", "Fatigue", "Fever", "Night sweats"],
        "Malaria": ["Fever", "Chills", "Headache", "Nausea", "Sweating"],
        "Dengue": ["Fever", "Headache", "Muscle pain", "Rash", "Bleeding"],
        "Hepatitis": ["Fatigue", "Nausea", "Abdominal pain", "Jaundice", "Dark urine"],
        "Chickenpox": ["Fever", "Rash", "Itching", "Fatigue", "Loss of appetite"],
        "Measles": ["Fever", "Rash", "Cough", "Runny nose", "Red eyes"],
        "Mumps": ["Swollen glands", "Fever", "Headache", "Muscle aches", "Fatigue"],
        "Rubella": ["Fever", "Rash", "Headache", "Red eyes", "Swollen glands"],
        "Zika Virus": ["Fever", "Rash", "Joint pain", "Red eyes", "Muscle pain"],
        "Ebola": ["Fever", "Severe headache", "Muscle pain", "Weakness", "Diarrhea"],
        "Fever": ["High temperature", "Sweating", "Chills", "Headache", "Muscle aches"],
        "Bronchitis": ["Cough", "Mucus", "Fatigue", "Shortness of breath", "Chest discomfort"],
        "Pneumonia": ["Cough", "Fever", "Chills", "Difficulty breathing", "Chest pain"],
        "Migraine": ["Headache", "Nausea", "Vomiting", "Sensitivity to light", "Sensitivity to sound"],
        "Anemia": ["Fatigue", "Weakness", "Pale skin", "Shortness of breath", "Dizziness"],
        "Allergies": ["Sneezing", "Itchy eyes", "Runny nose", "Rashes", "Swelling"],
        "Stomach Flu": ["Nausea", "Vomiting", "Diarrhea", "Stomach cramps", "Fever"],
        "Food Poisoning": ["Nausea", "Vomiting", "Diarrhea", "Stomach cramps", "Fever"]
    };

    let symptoms = symptomsData[disease] || ["No symptoms available"];
    let symptomsDiv = document.getElementById('symptoms');
    symptomsDiv.innerHTML = `
        <ul>
            ${symptoms.map(symptom => `
                <li class="symptom-item">
                    <input type="checkbox" class="symptom-checkbox" value="${symptom}">
                    ${symptom}
                    <input type="range" min="1" max="10" class="severity-slider" title="Severity">
                </li>
            `).join('')}
        </ul>
    `;
}

function redirectToDiet() {
    const selectedSymptoms = Array.from(document.getElementsByClassName('symptom-checkbox'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    window.location.href = `diet.html?symptoms=${encodeURIComponent(selectedSymptoms.join(','))}`;
}

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
    };

    let dietDiv = document.getElementById('diet');
    dietDiv.innerHTML = `<h3>Diet Recommendations</h3><ul>${selectedSymptoms.map(symptom => `<li>${dietRecommendations[symptom] || "Consult a healthcare provider for personalized advice."}</li>`).join('')}</ul>`;

    let foodsToAvoidDiv = document.getElementById('foodsToAvoid');
    foodsToAvoidDiv.innerHTML = `<h3>Foods to Avoid</h3><ul>${selectedSymptoms.map(symptom => 
        foodsToAvoid[symptom] ? foodsToAvoid[symptom].map(food => `<li>${food}</li>`).join('') : "<li>No specific foods to avoid</li>"
    ).join('')}</ul>`;
}

function searchSymptoms() {
    let input = document.getElementById('searchSymptomInput').value.toLowerCase();
    let symptoms = document.getElementById('symptoms');
    let symptomItems = symptoms.getElementsByClassName('symptom-item');

    for (let i = 0; i < symptomItems.length; i++) {
        let symptomName = symptomItems[i].innerText.toLowerCase();
        
        if (symptomName.indexOf(input) > -1) {
            symptomItems[i].style.display = 'block';
        } else {
            symptomItems[i].style.display = 'none';
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('symptoms.html')) {
        showSymptoms();
    } else if (window.location.pathname.endsWith('diet.html')) {
        showDiet();
    } else {
        fetchDiseases();
    }
});
