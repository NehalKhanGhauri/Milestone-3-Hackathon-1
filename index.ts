const forms = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElements = document.getElementById ('resume-display') as HTMLDivElement

forms.addEventListener('submit' , (event: Event) =>{ event
event.preventDefault();

const name= (document.getElementById('name') as HTMLInputElement).value
const email= (document.getElementById('email') as HTMLInputElement).value
const mobile= (document.getElementById('mobile') as HTMLInputElement).value
const education= (document.getElementById('education') as HTMLTextAreaElement).value
const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value
const skills= (document.getElementById('skills') as HTMLTextAreaElement).value

const resumeDynamicResumeBuilder=`
<h2><b> Dynamic Resume Builder </b></h2>
<h3><b> Personal Information  </b></h3>
<p><b> Name:</b> ${name}</p>
<p><b> Email:</b> ${email}</p>
<p><b> Mobile:</b> ${mobile}</p>

<h3>Education</h3>
<p>  ${education}</p>
<h3>Work Experience</h3>
<p> ${workExperience}</p>
<h3>Skills</h3>
<p>${skills}</p>


`;
if (resumeDisplayElements){resumeDisplayElements.innerHTML=resumeDynamicResumeBuilder}
else {console.error ('The resume display missing' );}

});

