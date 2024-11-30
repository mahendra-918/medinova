document.getElementById('activityForm').addEventListener('submit', logActivity);

const activities = [];

function logActivity(event) {
    event.preventDefault();

    const activity = document.getElementById('activity').value;
    const duration = document.getElementById('duration').value;
    const date = document.getElementById('date').value;

    activities.push({ activity, duration, date });
    updateActivityList();
    updateChart();
}

function updateActivityList() {
    const activityList = document.getElementById('activities');
    activityList.innerHTML = activities.map((act, index) =>
        `<li>${act.date} - ${act.activity} (${act.duration} min) <button class="delete" onclick="deleteActivity(${index})">Delete</button></li>`
    ).join('');
}

function deleteActivity(index) {
    activities.splice(index, 1);
    updateActivityList();
    updateChart();
}

function updateChart() {
    const ctx = document.getElementById('activityChart').getContext('2d');
    const labels = activities.map(act => act.date);
    const data = activities.map(act => act.duration);

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Activity Duration (minutes)',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Duration (minutes)'
                    }
                }
            }
        }
    });
}
