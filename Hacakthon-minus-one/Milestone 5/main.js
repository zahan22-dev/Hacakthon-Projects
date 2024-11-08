// Importing data for form
var resumeForm = document.getElementById('resumeBuilder');
var displayResume = document.getElementById('displayResume');
var shareableLinkContainer = document.getElementById('ShareableLinkContainer');
var shareableLinkElement = document.getElementById('ShareableLink');
var downloadPdfButton = document.getElementById('downaspdf');
// Function to handle the form submission
var generateResume = function (event) {
    // Preventing the default form submission
    event.preventDefault();
};
// Collecting data from the form fields
var username = document.getElementById('username').value;
var Name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var education = document.getElementById('education').value;
var workExperience = document.getElementById('workExperience').value;
var skills = document.getElementById('skills').value;
// Save form data in localStorage with the username as the key
var resumeData = {
    Name: Name,
    email: email,
    phone: phone,
    education: education,
    workExperience: workExperience,
    skills: skills
};
localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
// Generate the resume content dynamically
var resumeHTML = "\n    <h2>Editable Resume</h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(workExperience, "</p>\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
// Display the generated resume
displayResume.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData_1 = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData_1.name;
            document.getElementById('email').value =
                resumeData_1.email;
            document.getElementById('phone').value =
                resumeData_1.phone;
            document.getElementById('education').value =
                resumeData_1.education;
            document.getElementById('workExperience').value
                = resumeData_1.experience;
            document.getElementById('skills').value =
                resumeData_1.skills;
        }
    }
});
