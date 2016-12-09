/* This file contains four objects for bio, work, projects and education
   There are four display functions that display these objects in resume
*/

// Objects

// The bio object
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


// Calling the functions to display sections of the resume
bio.display();