/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
 $("#main").append("Sean ")

var awesomeThoughts = "I am sean and I am awesome!"
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("awesome", "fun");
console.log(funThoughts)

$("#main").append(funThoughts)
*/
//var skills = ["photography", "web development", "graphic design", "video production"];

var bio = {
  "name" : "Sean Krinik",
  "role" : "Web Developer",
  "contacts" : {
      "email" : "seankrinik@gmail.com",
      "mobile" : "xxx.xxx.xxxx",
      "github" : "https://github.com/skrinik",
      "location" : "Yorba Linda, CA",
  },
  "pictureURL" : "/Users/seankrinik/Documents/Udacity - Front end development/Stage 0/frontend-nanodegree-resume-master/images/biopic.jpg",
  "welcome" : "Welcome to my interactive resume!",
  "skills" : ["photography", "web development", "graphic design", "video production"]
}

var work = {
  "jobs" : [
    {
    "employer" : "Not Vodka Water",
    "title" : "Design and Development",
    "dates" : "2016 - current",
    "location" : "Phoenix, AZ",
    "description" : "Utilize Adobe Creative Suite to create graphic content for web and print use."
  },
  {
    "employer" : "USLI",
    "title" : "College Help, Underwriting",
    "dates" : "2014-2015",
    "location" : "Mission Viejo, CA",
    "description" : "Build and manage Microsoft Excel spreadsheets containing dated information. Use complex functions like VLOOKUP and pivot tables to access and display data."
  }]
}

var projects = {
  "projects" : [
    {
      "title" : "Interactive Resume",
      "dates" : "2017 - current",
      "description" : "Build an interactive resume web page utilizing javascript, jQuery, HTML and CSS.",
      "images" : [
        "/Users/seankrinik/Documents/Udacity - Front end development/Stage 0/frontend-nanodegree-resume-master/images/ScreenshotResume.png"
      ]
    },
    {
      "title" : "Hart Films Portfolio",
      "dates" : "2016 - 2017",
      "description" : "Built a photography portfolio website using Bootstrap 3 CSS and lightbox2.js.",
      "images" : [
        "/Users/seankrinik/Documents/Udacity - Front end development/Stage 0/frontend-nanodegree-resume-master/images/ScreenshotHomePage.png",
        "/Users/seankrinik/Documents/Udacity - Front end development/Stage 0/frontend-nanodegree-resume-master/images/hartfilmsLightbox.png",
        "/Users/seankrinik/Documents/Udacity - Front end development/Stage 0/frontend-nanodegree-resume-master/images/hartfilmsWeddingsPage.png"
    ]
    }
  ]}

var education = {
  "schools" : [
    {
      "name" : "California State University, Fullerton",
      "location" : "Fullerton, CA",
      "degree" : "Bachelor's",
      "major" : "Mathematics",
      "dates" : "2012-2016",
      "url" : "http://www.fullerton.edu"
    },
    {
      "name" : "University of Washington",
      "location" : "Seattle, WA",
      "degree" : "",
      "major" : "Mathematics",
      "dates" : "2010-2012",
      "url" : "https://www.washington.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front end development Nanodegree",
      "name" : "Udacity",
      "dates" : "Jan 2017 - current",
      "url" : "https://www.udacity.com"
    },
    {
      "title" : "Data Science Specialization",
      "name" : "Coursera",
      "dates" : "Jan 2015 - May 2015",
      "url" : "https://www.coursera.org"
    }
  ]
}


//Display Bio
bio.display = function(){
  //main bio info
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedPicUrl = HTMLbioPic.replace("%data%", bio.pictureURL);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
  $("#header").prepend(formattedName,formattedRole).append(formattedPicUrl,formattedWelcome);

  //contact
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedGithub = HTMLgithub.replace("%data%", "<a href=\"" + bio.contacts.github + "\" target=\"_blank\">github.com/skrinik</a>");
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#footerContacts").append(formattedEmail,formattedMobile,formattedLocation,formattedGithub);
  $("#topContacts").append(formattedEmail,formattedMobile,formattedLocation,formattedGithub);

  //skills
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}

//Display education

education.display = function(){
  //schools
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolName + formattedschoolDates, formattedschoolLocation, formattedschoolDegree + formattedschoolMajor);
  };

  //online courses
  $("#education").append(HTMLonlineClasses);
  for (classes in education.onlineCourses){
    $("#education").append(HTMLschoolStart);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[classes].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[classes].name);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[classes].dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", "<a href =\" " + education.onlineCourses[classes].url + "\" target=\"_blank\">" + education.onlineCourses[classes].url + "</a>");
    $(".education-entry:last").append(formattedonlineSchool, formattedonlineDates, formattedonlineTitle, formattedonlineURL);
  }
}


//Display Work
work.display = function(){
  for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
  }
}

/*
$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function locationizer(work_obj){
  var workLocations = [];
  for (job in work_obj){
    workLocations.push(work_obj.jobs[job].location);
  }
}
*/

// Projects Display
projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0){
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}


//Creates Array of Work Locations
function locationizer(work_obj){
  var workLocations = [];
  for (job in work_obj){
    workLocations.push(work_obj.jobs[job].location);
  }
}


bio.display();
education.display();
work.display();
projects.display();

//Creates map, calls in
$("#mapDiv").append(googleMap);

/* internationalizeButton -->
function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
<--*/

/*
$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedTitle);
$("#workExperience").append(formattedYearsEmployed);
$("#workExperience").append(formattedWorkLocation);
$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolMajor);
$("#education").append(formattedSchoolDates);
*/
