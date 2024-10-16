document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default behavior
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

function checkdata()
{
    var username = document.getElementById('name').value;
    if (username == ""){
        alert("Name must be filled out");
        return false;
    }
    
    var emailid = document.getElementById('email').value;
    if (emailid == ""){
        alert("Email must be filled out");
        return false;
    }
}