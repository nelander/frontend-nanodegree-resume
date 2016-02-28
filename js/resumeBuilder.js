/*
This is empty on purpose! Your code to build the resume will go here.
 */
var myName="Bengt Nelander";
var myRole="JavaScript Student";
var formatedName=HTMLheaderName.replace("%data%",myName);
var formatedRole=HTMLheaderRole.replace("%data%",myRole);
$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);
