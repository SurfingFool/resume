var formattedName = HTMLheaderName.replace("%data%", "Brett Ludwick");

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// works up until here

var bio = {
    "name": "Brett Ludwick",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "brettludwick@science.com",
        "github": "SurfingFool",
        "twitter": "@brettlud",
        "location": "San Marcos, CA"
    },
    "welcomeMessage": "Welcome to my Resume page!",
    "skills": [
        "html",
        "CSS3",
        "Javascript",
        "online video tutorials"
        ],
    "biopic": "images/fry.jpg"
}

var education = {
	"schools": [
	    {
		    "name": "California State University San Marcos",
		    "location": "San Marcos, CA",
		    "degree": "Multiple Subject Teaching Credential",
		    "majors": [
		        "Teaching Credential"
		    ],
		    "dates": 2000,
		    "url": "http://californiacredentials.com"
	    },
	    {
		    "name": "San Diego State University",
		    "location": "San Diego, CA",
		    "degree": "B.A. Physical Education",
		    "majors": [
		        "Physical Education",
		        "Science Minor"
		    ],
		    "dates": 1996,
		    "url": "http://SDSU.com"
	    }
	],
	"onlineCourses": [
	    {
	    	"title": "Front-end Web Developer",
	    	"school": "Udacity",
	    	"dates": "2015",
	    	"url": "http://www.udacity.com/course/ud804"
	    },
	    {
	    	"title": "Internet Emphasis in Graphic Communication",
	    	"school": "Palomar College",
	    	"dates": 2013-2015,
	    	"url": "http://www.palomar.edu"
	    }
	]
}

var work = {
	"jobs": [
		{
			"employer": "Carlsbad Unified School District",
			"title": "Science Teacher",
			"location": "123 Blackberry Way, Carlsbad, CA",
			"dates": 2014-2016,
			"description": "Taught K-5 hands-on science"
		},
		{
			"employer": "Escondido Charter High School District",
			"title": "Science Teacher",
			"location": "123 E. Valley Pkwy, Escondido, CA",
			"dates": 2007-2014,
			"description": "Taught 7-8 science through an online hybrid program."
		},
		{
			"employer": "Escondido Union School District",
			"title": "Science/Woodshop Teacher",
			"location": "456 Rind Street, Escondido, CA",
			"dates": 2000-2007,
			"description": "Taught 7-8 science through an online hybrid program."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Project 1",
			"dates": 2015,
			"description": "Check this out!",
			"images": ["", "", ""]
		},
		{
			"title": "Project 2",
			"dates": 2015,
			"description": "Check this out!",
			"images": ["", "", ""]
		},
		{
			"title": "Project 3",
			"dates": 2015,
			"description": "Check this out!",
			"images": ["", "", ""]
		}
	]
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}