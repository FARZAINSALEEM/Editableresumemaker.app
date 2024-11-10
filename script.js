document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    // Display resume
    document.getElementById('resume-name').textContent = name;
    document.getElementById('resume-email').textContent = `Email: ${email}`;
    document.getElementById('resume-phone').textContent = `Phone: ${phone}`;
    document.getElementById('resume-experience').textContent = experience;
    document.getElementById('resume-education').textContent = education;
    document.getElementById('resume-skills').textContent = `Skills: ${skills}`;

    // Optionally, clear the form
    document.getElementById('resume-form').reset();
});
