/*
  resumeBuilder.js works in tandem with helper.js to create
  HTML snippets for index.html to build my resume webpage.
*/
// Initialize objects and JSONs:
//Stores all bio elements:
var bio = {
    "name": "Sean Krinik",
    "role": "Web Developer",
    "contacts": {
        "email": "seankrinik@gmail.com",
        "mobile": "xxx.xxx.xxxx",
        "github": "https://github.com/skrinik",
        "location": "Yorba Linda, CA",
    },
    "biopic": "/Users/seankrinik/Documents/Udacity - Front end development/Stage 0/frontend-nanodegree-resume-master/images/biopic.jpg",
    "welcomeMessage": "Welcome to my interactive resume!",
    "skills": ["photography", "web development", "graphic design", "video production"] //utilizing arrays
};

//Stores all work elements as a JSON object.
var work = {
    "jobs": [{
            "employer": "Not Vodka Water",
            "title": "Design and Development",
            "dates": "2016 - current",
            "location": "Phoenix, AZ",
            "description": "Utilize Adobe Creative Suite to create graphic content for web and print use."
        },
        {
            "employer": "USLI",
            "title": "College Help, Underwriting",
            "dates": "2014-2015",
            "location": "Mission Viejo, CA",
            "description": "Build and manage Microsoft Excel spreadsheets containing dated information. Use complex functions like VLOOKUP and pivot tables to access and display data."
        }
    ]
};

//Stores all project elements in a JSON object.
var projects = {
    "projects": [{
            "title": "Interactive Resume",
            "dates": "2017 - current",
            "description": "Build an interactive resume web page utilizing javascript, jQuery, HTML and CSS.",
            "images": [ //utilizing arrays
                "/Users/seankrinik/Documents/Udacity - Front end development/Stage 0/frontend-nanodegree-resume-master/images/ScreenshotResume.png"
            ]
        },
        {
            "title": "Hart Films Portfolio",
            "dates": "2016 - 2017",
            "description": "Built a photography portfolio website using Bootstrap 3 CSS and lightbox2.js.",
            "images": [ //utilizing arrays
                "/Users/seankrinik/Documents/Udacity - Front end development/Stage 0/frontend-nanodegree-resume-master/images/ScreenshotHomePage.png",
                "/Users/seankrinik/Documents/Udacity - Front end development/Stage 0/frontend-nanodegree-resume-master/images/hartfilmsLightbox.png",
                "/Users/seankrinik/Documents/Udacity - Front end development/Stage 0/frontend-nanodegree-resume-master/images/hartfilmsWeddingsPage.png"
            ]
        }
    ]
};

//Stores all education elements in a JSON object.
var education = {
    "schools": [{
            "name": "California State University, Fullerton",
            "location": "Fullerton, CA",
            "degree": "Bachelor's",
            "majors": ["Mathematics"], //utilizing arrays
            "dates": "2012-2016",
            "url": "http://www.fullerton.edu"
        },
        {
            "name": "University of Washington",
            "location": "Seattle, WA",
            "degree": "",
            "majors": ["Mathematics"], //utilizing arrays
            "dates": "2010-2012",
            "url": "https://www.washington.edu"
        }
    ],
    "onlineCourses": [{
            "title": "Front end development Nanodegree",
            "school": "Udacity",
            "dates": "Jan 2017 - current",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Data Science Specialization",
            "school": "Coursera",
            "dates": "Jan 2015 - May 2015",
            "url": "https://www.coursera.org"
        }
    ]
};

//Create a variable to store the '%data%' string for simplicity:
var data = '%data%';

//Using dot notation, encapsulating function to display bio objects.
bio.display = function() {
    //main bio info
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedPicUrl = HTMLbioPic.replace(data, bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").prepend(formattedName, formattedRole).append(formattedPicUrl, formattedWelcome);

    //contact
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github).replace('#', bio.contacts.github); //above line adds a url element to the object.
    //above line adds a url element to the object.
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#footerContacts, #topContacts").append(formattedEmail, formattedMobile, formattedLocation, formattedGithub);
    //above line appends all the info the the last child element for both header and footer divs.

    //loops through skills array and appends the skills to a separate div within header.
    $("#header").append(HTMLskillsStart);
    //for (var skill in bio.skills) {
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

//Using dot notation, encapsulating function to display education objects.
education.display = function() {
    //for loop using an index variable, loops through schools object.
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart); //indicates start of new school object.
        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name);
        var formattedschoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        var formattedschoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors);
        var formattedschoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolName + formattedschoolDates, formattedschoolLocation, formattedschoolDegree + formattedschoolMajor);
        //above line appends all the info the the last child element.
    }

    //for loop using an index variable, loops through onlineCourses object.
    $("#education").append(HTMLonlineClasses); //indicates the start of onlineCourses rather than schools.
    for (var j = 0; j < education.onlineCourses.length; j++) {
        $("#education").append(HTMLschoolStart); //indicates new school object, this time in the form of onlineClasses object.
        var formattedonlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[j].title);
        var formattedonlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[j].school);
        var formattedonlineDates = HTMLonlineDates.replace(data, education.onlineCourses[j].dates);
        var formattedonlineURL = HTMLonlineURL.replace(data, education.onlineCourses[j].school).replace('#', education.onlineCourses[j].url);
        //above line adds a url element to the object.
        $(".education-entry:last").append(formattedonlineSchool, formattedonlineDates, formattedonlineTitle, formattedonlineURL);
        //above line appends all the info the the last child element.
    }
};


//Using dot notation, encapsulating function to display work objects.
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart); //indicates new workExperience object
        var formattedworkEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        var formattedworkTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        var formattedworkDates = HTMLworkDates.replace(data, work.jobs[i].dates);
        var formattedworkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
        var formattedworkDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
        $(".work-entry:last").append(formattedworkEmployer + formattedworkTitle, formattedworkDates, formattedworkLocation, formattedworkDescription);
        //above line appends all the info the the last child element.
    }
};



//Using dot notation, encapsulating function to display project objects.
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart); //indicates new project object
        var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        //checks if there are images in the images array, if so, loops through and appends the images to last child.
        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace(data, projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

//Calls to the encapsulating functions for bio, work, education and projects objects.
bio.display();
education.display();
work.display();
projects.display();

//Creates googleMap api at bottom of index.html.
$("#mapDiv").append(googleMap);


//Commented out functions from previous exercises within the Nanodegree.
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
};

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
};
$("#main").append(internationalizeButton);
*/
// end misc. functions.
