document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const dataDisplay = document.getElementById('dataDisplay');

    // Load existing data
    loadData();

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                form.reset();
                loadData(); // Reload the data display
                showNotification('Data submitted successfully!', 'success');
            } else {
                throw new Error('Failed to submit data');
            }
        } catch (error) {
            showNotification('Error submitting data. Please try again.', 'error');
            console.error('Error:', error);
        }
    });

    // Function to load and display data
    async function loadData() {
        try {
            const response = await fetch('/api/data');
            const data = await response.json();
            
            dataDisplay.innerHTML = data.map(item => `
                <div class="data-card">
                    <h3>${item.name}</h3>
                    <p><strong>Email:</strong> ${item.email}</p>
                    <p><strong>Message:</strong> ${item.message}</p>
                    <p class="timestamp">Submitted: ${new Date(item.createdAt).toLocaleString()}</p>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error loading data:', error);
            showNotification('Error loading data. Please refresh the page.', 'error');
        }
    }

    // Function to show notifications
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}); 