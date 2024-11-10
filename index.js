var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeDynamicResumeBuilder = "\n<h2><b> Dynamic Resume Builder </b></h2>\n<h3><b> Personal Information  </b></h3>\n<p><b> Name:</b> ".concat(name, "</p>\n<p><b> Email:</b> ").concat(email, "</p>\n<p><b> Mobile:</b> ").concat(mobile, "</p>\n\n<h3>Education</h3>\n<p>  ").concat(education, "</p>\n<h3>Work Experience</h3>\n<p> ").concat(workExperience, "</p>\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n\n\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeDynamicResumeBuilder;
    }
    else {
        console.error('The resume display missing');
    }
});
