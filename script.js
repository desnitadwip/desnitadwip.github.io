// Form submission handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Terima kasih telah menghubungi saya! Saya akan segera membalas pesan Anda.");
    this.reset();
});
