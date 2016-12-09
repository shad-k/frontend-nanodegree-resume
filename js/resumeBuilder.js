/* This file contains four objects for bio, work, projects and education
   There are four display functions that display these objects in resume
*/

// Objects

// Bio object
var bio = {
	"name": "Shadab Khan",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile": "+918285453041",
		"email": "shadab.webdev@gmail.com",
		"github": "shad-k",
		"twitter": "@shadab2005",
		"location": "New Delhi"
	},
	"welcomeMessage": "I develop awesome websites and web apps",
	"skills": ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
	"biopic": "images/profile.jpg"
};


//Work object
var work = {
	"jobs": [
		{
			"employer": "S&P Capital IQ",
			"title": "Infrastructure Systems Engineer",
			"location": "Gurgaon",
			"dates": "July 2015 - June 2016",
			"description": "Work involved monitoring the Capital IQ platform and working to ensure that" +
				" the platform is available 24*7. Learnt the use of tools like ExtraHop, CatchPoint and Nagios."
		},
		{
			"employer": "Opinia 360",
			"title": "Web Developer",
			"location": "New Delhi",
			"dates": "August 2016 - October 2016",
			"description": "Developed the Opinia 360 platform showcase website as well as the client side pages."
		}
	]
};


//Project object
var projects = {
	"projects": [
		{
			"title": "Reading Age Determination",
			"dates": "July 2014 - November 2014",
			"description": "Determining the readability of a particular text. Using the traditional " +
			"and new techniques we judge whether a particular text is suitable for a particular age.",
			"images": ["images/flesch-index.jpg",
				"images/flesch-reading-ease.png"]
		},
		{
			"title": "Musical Instruments Identification",
			"dates": "January 2015 - May 2015",
			"description": "Identifying the instruments being played in a piece of music. Trained a neural " +
			"network with five instruments to start with and used the neural networl " +
			"to identify a musical instrument in an audio file.",
			"images": ["images/musical-instruments.jpg",
				"images/neural-network.png"]
		}
	]
};


//Display Functions

// Function to display bio section
bio.display = function() {

	//Formatting and Displaying the name
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderRole);

	//Formatting and Displaying the name
	/* The name is written in the code because we have to prepend the name and role
		in the header section before the contacts section and the name needs to be before the role
		in the HTML.
	*/
	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedHeaderName);

	//Formatting and Displaying contact details

	//Mobile
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	//Email
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	//GitHub
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	//Twitter
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	//Location
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	//End of contacts


	//Formatting and Displaying the profile image, welcome message and skills

	//Profile Image
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	//Welcome Message
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	//Skills
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(skill) {

		var formattedSkills = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkills);
	});
};


//Function to display work object
work.display = function() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);

		//Work employer and title
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);

		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);

		//Work dates
		var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedWorkDates);

		//Work location
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDesc = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedWorkDesc);
	});
};


//Function to display project object
projects.display = function() {
	projects.projects.forEach(function(project) {

		//project-entry div
		$("#projects").append(HTMLprojectStart);

		//Project title
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(formattedProjectTitle);

		//Project dates
		var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formattedProjectDates);

		//Project description
		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedProjectDesc);

		//Project images
		project.images.forEach(function(image) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
			$(".project-entry:last").append(formattedProjectImage);
		});

	});
};


// Calling the functions to display sections of the resume
bio.display();

work.display();

projects.display();
