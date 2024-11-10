var _a;
// Add the generate resume function with slide-in effect
(_a = document.getElementById('generateBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a, _b;
    var picture = (_b = (_a = document.getElementById('picture')) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    // Generate the resume content with slide-in animation
    var generatedResume = "\n        <div class=\"resume-slide-left\">\n            <h2>".concat(name, "</h2>\n            <img src=\"").concat(pictureURL, "\" alt=\"Profile Picture\" width=\"100\" height=\"100\"><br>\n            <strong>Phone:</strong> ").concat(phone, "<br>\n            <strong>Email:</strong> ").concat(email, "<br>\n            <strong>Address:</strong> ").concat(address, "<br><br>\n            <strong>Skills:</strong> <div id=\"skillsList\">").concat(skills, "</div><br>\n            <button id=\"addSkillBtn\" class=\"button-hover\">Add More Skills</button>\n            <div id=\"additionalSkills\"></div><br>\n            <strong>Education:</strong> <div id=\"educationList\">").concat(education, "</div><br>\n            <button id=\"addEducationBtn\" class=\"button-hover\">Add More Education</button>\n            <div id=\"additionalEducation\"></div><br>\n            <strong>Experience:</strong> <div id=\"experienceList\">").concat(experience, "</div><br>\n            <button id=\"addExperienceBtn\" class=\"button-hover\">Add More Experience</button>\n            <div id=\"additionalExperience\"></div><br>\n        </div>\n    ");
    // Insert generated resume into the DOM
    var resumeContainer = document.getElementById('generatedResume');
    resumeContainer.innerHTML = generatedResume;
    resumeContainer.classList.add('slide-from-left'); // Add slide-in effect class
    // Add event listeners for dynamically added buttons
    addDynamicEventListeners();
});
// Function to handle dynamic event listeners
function addDynamicEventListeners() {
    var _a, _b, _c;
    // Event Listener for Adding More Skills
    (_a = document.getElementById('addSkillBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var additionalSkillsDiv = document.getElementById('additionalSkills');
        var newSkillInput = document.createElement('input');
        newSkillInput.type = 'text';
        newSkillInput.placeholder = 'Additional Skill';
        newSkillInput.classList.add('input-field');
        additionalSkillsDiv === null || additionalSkillsDiv === void 0 ? void 0 : additionalSkillsDiv.appendChild(newSkillInput);
        // Scroll to the new skill input field smoothly
        newSkillInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        newSkillInput.addEventListener('change', function () {
            var skillsList = document.getElementById('skillsList');
            if (skillsList) {
                skillsList.innerHTML += "<br>".concat(newSkillInput.value);
            }
        });
    });
    // Event Listener for Adding More Education
    (_b = document.getElementById('addEducationBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var additionalEducationDiv = document.getElementById('additionalEducation');
        var newEducationInput = document.createElement('textarea');
        newEducationInput.placeholder = 'Additional Education';
        newEducationInput.classList.add('input-field');
        additionalEducationDiv === null || additionalEducationDiv === void 0 ? void 0 : additionalEducationDiv.appendChild(newEducationInput);
        // Scroll to the new education input field smoothly
        newEducationInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        newEducationInput.addEventListener('change', function () {
            var educationList = document.getElementById('educationList');
            if (educationList) {
                educationList.innerHTML += "<br>".concat(newEducationInput.value);
            }
        });
    });
    // Event Listener for Adding More Experience
    (_c = document.getElementById('addExperienceBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        var additionalExperienceDiv = document.getElementById('additionalExperience');
        var newExperienceInput = document.createElement('textarea');
        newExperienceInput.placeholder = 'Additional Experience';
        newExperienceInput.classList.add('input-field');
        additionalExperienceDiv === null || additionalExperienceDiv === void 0 ? void 0 : additionalExperienceDiv.appendChild(newExperienceInput);
        // Scroll to the new experience input field smoothly
        newExperienceInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        newExperienceInput.addEventListener('change', function () {
            var experienceList = document.getElementById('experienceList');
            if (experienceList) {
                experienceList.innerHTML += "<br>".concat(newExperienceInput.value);
            }
        });
    });
}
