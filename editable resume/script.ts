// Add the generate resume function with slide-in effect
document.getElementById('generateBtn')?.addEventListener('click', function () {
    const picture = (document.getElementById('picture') as HTMLInputElement)?.files?.[0];
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    let pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }

    // Generate the resume content with slide-in animation
    const generatedResume = `
        <div class="resume-slide-left">
            <h2>${name}</h2>
            <img src="${pictureURL}" alt="Profile Picture" width="100" height="100"><br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Address:</strong> ${address}<br><br>
            <strong>Skills:</strong> <div id="skillsList">${skills}</div><br>
            <button id="addSkillBtn" class="button-hover">Add More Skills</button>
            <div id="additionalSkills"></div><br>
            <strong>Education:</strong> <div id="educationList">${education}</div><br>
            <button id="addEducationBtn" class="button-hover">Add More Education</button>
            <div id="additionalEducation"></div><br>
            <strong>Experience:</strong> <div id="experienceList">${experience}</div><br>
            <button id="addExperienceBtn" class="button-hover">Add More Experience</button>
            <div id="additionalExperience"></div><br>
        </div>
    `;

    // Insert generated resume into the DOM
    const resumeContainer = document.getElementById('generatedResume') as HTMLElement;
    resumeContainer.innerHTML = generatedResume;
    resumeContainer.classList.add('slide-from-left');  // Add slide-in effect class

    // Add event listeners for dynamically added buttons
    addDynamicEventListeners();
});

// Function to handle dynamic event listeners
function addDynamicEventListeners() {
    // Event Listener for Adding More Skills
    document.getElementById('addSkillBtn')?.addEventListener('click', function () {
        const additionalSkillsDiv = document.getElementById('additionalSkills');
        const newSkillInput = document.createElement('input');
        newSkillInput.type = 'text';
        newSkillInput.placeholder = 'Additional Skill';
        newSkillInput.classList.add('input-field');
        additionalSkillsDiv?.appendChild(newSkillInput);

        // Scroll to the new skill input field smoothly
        newSkillInput.scrollIntoView({ behavior: 'smooth', block: 'center' });

        newSkillInput.addEventListener('change', function () {
            const skillsList = document.getElementById('skillsList');
            if (skillsList) {
                skillsList.innerHTML += `<br>${newSkillInput.value}`;
            }
        });
    });

    // Event Listener for Adding More Education
    document.getElementById('addEducationBtn')?.addEventListener('click', function () {
        const additionalEducationDiv = document.getElementById('additionalEducation');
        const newEducationInput = document.createElement('textarea');
        newEducationInput.placeholder = 'Additional Education';
        newEducationInput.classList.add('input-field');
        additionalEducationDiv?.appendChild(newEducationInput);

        // Scroll to the new education input field smoothly
        newEducationInput.scrollIntoView({ behavior: 'smooth', block: 'center' });

        newEducationInput.addEventListener('change', function () {
            const educationList = document.getElementById('educationList');
            if (educationList) {
                educationList.innerHTML += `<br>${newEducationInput.value}`;
            }
        });
    });

    // Event Listener for Adding More Experience
    document.getElementById('addExperienceBtn')?.addEventListener('click', function () {
        const additionalExperienceDiv = document.getElementById('additionalExperience');
        const newExperienceInput = document.createElement('textarea');
        newExperienceInput.placeholder = 'Additional Experience';
        newExperienceInput.classList.add('input-field');
        additionalExperienceDiv?.appendChild(newExperienceInput);

        // Scroll to the new experience input field smoothly
        newExperienceInput.scrollIntoView({ behavior: 'smooth', block: 'center' });

        newExperienceInput.addEventListener('change', function () {
            const experienceList = document.getElementById('experienceList');
            if (experienceList) {
                experienceList.innerHTML += `<br>${newExperienceInput.value}`;
            }
        });
    });
}