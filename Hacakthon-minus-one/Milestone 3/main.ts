// Importing data for form
const resumeForm = document.getElementById('resumeBuilder') as HTMLFormElement;
const displayResume = document.getElementById('displayResume') as HTMLDivElement;

// Function to handle the form submission
const generateResume = (event: Event): void => {
    // Preventing the default form submission
    event.preventDefault();

    // Collecting data from the form fields
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Structuring the resume data to display
    const resumeContent = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Displaying the resume content
    displayResume.innerHTML = resumeContent;
};

// Adding the event listener for form submission
resumeForm.addEventListener('submit', generateResume);
