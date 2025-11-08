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
    const currentTime = new Date().toString();
    
    const resultDiv = document.getElementById('form-result');
    resultDiv.innerHTML = `
        <h3>Form Submitted Successfully!</h3>
        <p><strong>Current time:</strong> ${currentTime}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${formatDate(birthdate)}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
    
    // Scroll ke hasil form
    resultDiv.scrollIntoView({ behavior: 'smooth' });
    
    // Reset form (opsional)
    // document.getElementById('contact-form').reset();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', function() {
    // Homepage - Welcome message
    if (window.location.pathname.includes('index.html') || 
        window.location.pathname === '/' || 
        window.location.pathname.endsWith('/')) {
        displayWelcome();
        initializeForm(); // Juga initialize form di homepage
    }
    
    // Message Us page - Form initialization
    if (window.location.pathname.includes('message.html')) {
        initializeForm();
    }
});