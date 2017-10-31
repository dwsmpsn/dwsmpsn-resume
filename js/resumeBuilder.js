// setting up objects for resume sections
var bio = {
    "name": "Dylan Sampson",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "dylan@email.com",
        "github": "https://github.com/dwsmpsn",
        "twitter": "@generictwitter",
        "location": "Chicago, IL"
    },
    "welcome": "Hello!",
    "skills": [
        "HTML", "CSS", "JavaScript"
    ],
    "biopic": "images/dylan.jpg",
    "display": function() {
        var formattedName, formattedRole, formattedPic, formattedWelcome, formattedMobile, formattedEmail, formattedGithub, formattedTwitter;

        formattedName = HTMLheaderName.replace("%data%", bio.name);
        formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

        formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedTwitter);

        $("#header").append(formattedWelcome);
        $("#header").append(formattedPic);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Ball State University",
        "location": "Muncie, IN",
        "degree": "BA",
        "majors": ["Telecommunications"],
        "dates": "2008-2012",
        "url": "https://cms.bsu.edu"
    }, {
        "name": "Ball State University",
        "location": "Muncie, IN",
        "degree": "MS",
        "majors": ["Information and Communication Science"],
        "dates": "2013-2014",
        "url": "https://cms.bsu.edu"
    }],
    "onlineCourses": [{
        "title": "Front End Development Nanodegree",
        "school": "Udacity",
        "dates": "In Progress",
        "url": "http://www.udacity.com"
    }],
    "display": function() {
        $("#education").append(HTMLschoolStart);

        for (var i = 0; i < education.schools.length; i++) {

            var formattedName, formattedLocation, formattedDegree, formattedMajors, formattedUrl, formattedDates;

            formattedName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            for (var x = 0; x < education.schools[i].majors.length; x++) {
                formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[x]);

                $(".education-entry:last").append(formattedMajors);
            }
        }

        for (i = 0; i < education.onlineCourses.length; i++) {

            var formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl;

            formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
            formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
            formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            formattedClasses = HTMLonlineClasses;

            $(".education-entry:last").append(formattedClasses);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineUrl);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "AT&T",
        "title": "Data Analyst",
        "location": "Hammond, IN",
        "dates": "2016 - current",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget elit et ex cursus consectetur. Etiam lacus urna, rutrum et laoreet ut, iaculis ut purus. Integer scelerisque risus magna, sit."
    }, {
        "employer": "AT&T",
        "title": "Sr. Real Estate Manager",
        "location": "Chicago, IL",
        "dates": "2014 - 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget elit et ex cursus consectetur. Etiam lacus urna, rutrum et laoreet ut, iaculis ut purus. Integer scelerisque risus magna, sit."
    }],
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "October 2017",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget elit et ex cursus consectetur. Etiam lacus urna, rutrum et laoreet ut, iaculis ut purus. Integer scelerisque risus magna, sit.",
        "images": "http://via.placeholder.com/250x250"
    }, {
        "title": "Sample Project 2",
        "dates": "November 2017",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget elit et ex cursus consectetur. Etiam lacus urna, rutrum et laoreet ut, iaculis ut purus. Integer scelerisque risus magna, sit.",
        "images": ["http://via.placeholder.com/250x250"]
    }],
    "display": function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

// calling and displaying objects

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
