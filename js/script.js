// Welcome Message di Homepage
function displayWelcome() {
    const userName = prompt("Masukkan nama Anda:") || "Visitor";
    document.getElementById('welcome-message').textContent = `Hi ${userName}`;
}

// Panggil fungsi ketika homepage loaded
if (window.location.pathname.includes('index.html') || 
    window.location.pathname === '/') {
    window.onload = displayWelcome;
}

// Form Validation & Display Result
if (window.location.pathname.includes('message.html')) {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            showFormData();
        }
    });
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validasi nama
    if (name === '') {
        alert('Nama harus diisi');
        return false;
    }
    
    // Validasi email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Format email tidak valid');
        return false;
    }
    
    // Validasi message
    if (message === '') {
        alert('Pesan harus diisi');
        return false;
    }
    
    return true;
}

function showFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    const resultDiv = document.getElementById('form-result');
    resultDiv.innerHTML = `
        <h3>Form Submitted Successfully!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    
    // Reset form
    document.getElementById('contact-form').reset();
}