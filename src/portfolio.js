/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Anas Nisar",
  title: "Hi, I'm Anas",
  subTitle:
    "A highly-motivated software engineer with 4 years of experience in designing and coding innovative technical solutions using modern technologies including, but not limited to JavaScript, Golang, MERN Stack, and GCP(Google Cloud Platform)",
  resumeLink:
    "https://drive.google.com/file/d/1EHve20ffuVhBrvimxC_5YVsw7VNxdgGS/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/manasnisar",
  linkedin: "https://www.linkedin.com/in/anas-nisar-8944441a1",
  gmail: "anasnisar980@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/10569660/anas-nisar",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "AN ASPIRING GENERALIST WHO WANTS TO EXPLORE AS MANY TECHs AS POSSIBLE",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front End / User Interfaces for web applications"
    ),
    emoji(
      "⚡ Design, build and improve fault-tolerant API, microservices and cloud architecture to ensure optimal performance and experience"
    ),
    emoji(
      "⚡ Integrate with third party services and platforms such as Firebase / GCP / Bigcommerce"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-box"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-cloud"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Comsats University Islamabad",
      logo: require("./assets/images/comsats-logo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "September 2018 - August 2022",
      desc: "Maintaing a CGPA of 3.45. Took courses about Software Engineering, Web Security, Operating Systems, Visual Programming, Database Designs, Project Management, ..."
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Skipify",
      companylogo: require("./assets/images/skipify.svg"),
      date: "Jan 2021 – Present",
      descBullets: [
        "Worked with a remote team spread across two continents to produce features to showcase, out of thin air, allowing the startup to draw investments",
        "Optimized 1-Touch shopping experience for E-Commerce channels currently being used by hundreds of users across multiple merchants",
        "Built, released and supported/improved an in-house POC auth solution using backend technologies such as Golang, Redis and SQL"
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "Sectem Technologies",
      companylogo: require("./assets/images/sectem-logo.png"),
      date: "Jan 2020 – Jan 2021",
      descBullets: [
        "Designed and built technical solutions as part of a team for various international clients",
        "Worked with both SAAS and On-Premises based product development",
        "Hands on experience with serverless tech stack and microservices architecture",
        "Followed agile methodologies and scrum practices"
      ]
    },
    {
      role: "Web Developer",
      company: "Fiverr",
      companylogo: require("./assets/images/fiverr-logo.png"),
      date: "July 2019 – Dec 2019",
      descBullets: [
        "Designed and built technical solutions for various international using MERN Stack",
        "Deployed projects for clients by setting up CI/CD pipelines using popular technologies such as CircleCi"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/skipify.svg"),
      projectName: "Skipify",
      projectDesc: "Frictionless Commerce, Secure Omni Channel Payments",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skipify.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "",
      subtitle: "",
      // image: require(""),
      footerLink: [
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      title: "",
      subtitle: "",
      // image: require(""),
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },

    {
      title: "",
      subtitle: "",
      // image: require(""),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "",
      title: "",
      description: ""
    },
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE"),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an opportunity or just want to say hi? My Inbox is open for all.",
  number: "+92-3179665466",
  email_address: "anasnisar980@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
