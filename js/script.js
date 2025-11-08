// Welcome Message di Homepage
function displayWelcome() {
    const userName = prompt("Masukkan nama Anda:") || "Visitor";
    document.getElementById('user-name').textContent = userName;
}

// Form Validation & Display Result
function initializeForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                showFormData();
            }
        });
    }
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value.trim();
    
    if (name === '') {
        alert('Nama harus diisi');
        return false;
    }
    
    if (!birthdate) {
        alert('Tanggal lahir harus diisi');
        return false;
    }
    
    if (!gender) {
        alert('Jenis kelamin harus dipilih');
        return false;
    }
    
    if (message === '') {
        alert('Pesan harus diisi');
        return false;
    }
    
    return true;
}

function showFormData() {
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;
    
    const resultDiv = document.getElementById('form-result');
    resultDiv.innerHTML = `
        <h3>Data Submitted:</h3>
        <p><strong>Current time:</strong> ${new Date().toString()}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${formatDate(birthdate)}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
    
    // Reset form
    document.getElementById('contact-form').reset();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', function() {
    // Homepage - Welcome message
    if (window.location.pathname.includes('index.html') || 
        window.location.pathname === '/' || 
        window.location.pathname.endsWith('/')) {
        displayWelcome();
    }
    
    // Message Us page - Form initialization
    if (window.location.pathname.includes('message.html')) {
        initializeForm();
    }
});