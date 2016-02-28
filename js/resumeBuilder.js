/*
This is empty on purpose! Your code to build the resume will go here.
 */
//var myName="Bengt Nelander";
//var myRole="JavaScript Student";
//var formatedName=HTMLheaderName.replace("%data%",myName);
//var formatedRole=HTMLheaderRole.replace("%data%",myRole);
//$("#header").prepend(formatedRole);
//$("#header").prepend(formatedName);

var bio = {
		"name" 		: "Bengt Nelander",
		"role" 		: "JavaScript Student",
		"contacts"	: { "mobile" 	: "+49 171 123456789",
						"email"  	: "bengt@xxxxxxxx.de",
						"location"	: "Munich, Germany",
		},
		"picture"	: "images/bengt.jpg",
		"welcome"	: "Welcome to my very interesting but short resume. It shows that my JavaScript skills are getting better and better ;)",
		"skills"	: [ " Mainframe Computing", " Cobol", " Microsoft Office", " Web Design", " PHP" ]
};

var work = {};
work.position 	= "Senior Consultant";
work.employer 	= "T-Systems";
work.years  	= 40;
work.city  		= "Munich, Germany";

//var education = {};
//education["name"]		= "LTH";
//education["years"]		= 5;
//education["location"] 	= "Lund, Sweden";

/* JSON */
var education =   {
	  	"schools": [{
	  		"name": "LTH",
	  		"city": "Lund",
	  		"major": ["Electonics", "Measurement", "Cybernetics"],
	  		"minor": ["Math", "Physics", "Programming"],
	  		"graduation": 1975
	  	}, {
	  		"name": "Udacity.com",
	  		"city": "Web",
	  		"major": ["JavaScript", "GitHub", "PHP"],
	  		"minor": ["JSON", "AJAX"],
	  		"graduation": 2016
	  	}],
	  	"onlinecourses": [{
	  		"title": "JavaScript",
	  		"company": "Udacity.com"
	  	}, {
	  		"title": "PHP",
	  		"company": "Some_Other.com"
	  	}]
	  }

var formatedName=HTMLheaderName.replace("%data%",bio.name);
var formatedRole=HTMLheaderRole.replace("%data%",bio.role);
var formatedBioPic=HTMLbioPic.replace("%data%",bio.picture);
var formatedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcome);
var formatedSkils=HTMLskills.replace("%data%",bio.skills);

$("#header").append(formatedName);
$("#header").append(formatedRole);
$("#header").append(formatedBioPic);
$("#header").append(formatedWelcomeMsg);
$("#header").append(formatedSkils);
$("#main").append(work["position"]);

/* Output JSON Objects */
$("#main").append(education.schools[0].name);
$("#main").append(education.schools[0].city);
$("#main").append(education.schools[1].name);
$("#main").append(education.schools[1].city);
$("#main").append(education.onlinecourses[0].title);
$("#main").append(education.onlinecourses[0].company);
$("#main").append(education.onlinecourses[1].title);
$("#main").append(education.onlinecourses[1].company);
