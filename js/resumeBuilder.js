/*
This is empty on purpose! Your code to build the resume will go here.
 */
//var myName="Bengt Nelander";
//var myRole="JavaScript Student";
//var formatedName=HTMLheaderName.replace("%data%",myName);
//var formatedRole=HTMLheaderRole.replace("%data%",myRole);
//$("#header").prepend(formatedRole);
//$("#header").prepend(formatedName);

skills 	= [ " Mainframe Computing", " Cobol", " Microsoft Office", " Web Design", " PHP" ];
contact1= [ "E-Mail", "bengt@nelander.de"];
contact2= [ "Mobile", "+49 160 97974154"];

var bio = {
		"name" 		: "Bengt Nelander",
		"role" 		: "JavaScript Student",
		"contact1"	: contact1,
		"contact2"  : contact2,
		"picture"	: "bengt.jpg",
		"welcome"	: "Welcome to my very interesting but short resume. It shows that my JavaScript skills are getting better and better ;)",
		"skills"	: skills
};

var formatedName=HTMLheaderName.replace("%data%",bio.name);
var formatedRole=HTMLheaderRole.replace("%data%",bio.role);
var formatedContact1=HTMLcontactGeneric.replace("%contact%",bio.contact1[0]);
formatedContact1=formatedContact1.replace("%data%",bio.contact1[1]);
var formatedContact2=HTMLcontactGeneric.replace("%contact%",bio.contact2[0]);
formatedContact2=formatedContact2.replace("%data%",bio.contact2[1]);
var formatedBioPic=HTMLbioPic.replace("%data%",bio.picture);
var formatedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcome);
var formatedSkils=HTMLskills.replace("%data%",bio.skills);

$("#header").prepend(formatedSkils);
$("#header").prepend(formatedWelcomeMsg);
$("#header").prepend(formatedBioPic);
$("#header").prepend(formatedContact2);
$("#header").prepend(formatedContact1);
$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);
