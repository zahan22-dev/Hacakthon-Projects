// Importing data for form
var resumeForm = document.getElementById('resumeBuilder');
var displayResume = document.getElementById('displayResume');
// Function to handle the form submission
var generateResume = function (event) {
    // Preventing the default form submission
    event.preventDefault();
    // Collecting data from the form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value;
    // Structuring the resume data to display
    var resumeContent = "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Displaying the resume content
    displayResume.innerHTML = resumeContent;
};
// Adding the event listener for form submission
resumeForm.addEventListener('submit', generateResume);
