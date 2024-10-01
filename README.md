# ReadMe Maker
   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Description
    It is imperative to have a high-quality README for open source projects on Github. They should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that additional developers are more likely to not only use but also contribute to the success of the project. This command-line application allows for quick and easy generation of a project README that will allow project creators to spend more time working on finishing the project and less time creating a README.
## Installation
    You will need to use NPM Install to install both the inquirer and fs packages in order for this application to run.
## Usage
    
```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
```md
Technologies Used:
    Javascript
    Node.js
```

```md
Below is a screenshot and video of the app being used inside the command line:
<src
```
## License
    This project is licensed under the MIT License.

## Contributing
    Users can contribute to this project by adding additional licensing options in both the inquirer question as well as the renderLicenseLink and renderLicenseBadge functions. There are currently only 7 options for licenses not including "N/A" and there are dozens of licensing options that are available.


## Tests
    N/A

## Contact Information
    GitHub Username: andrewsoper1
    Email Address: soper.andrew6@gmail.com