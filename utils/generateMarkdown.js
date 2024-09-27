function renderLicenseBadge(license) {
    if (license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    }
    else if (license === 'Boost 1.0') {
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
    }
    else if (license === 'GNU AGPL v3.0') {
        return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
    }
    else if (license === 'GNU GPL v3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    }
    else if (license === 'GNU LGPL v3.0') {
        return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]';
    } 
    else if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`; //return ''
    }
    else if (license === 'Mozilla 2.0') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
    }
    else {
        return '';
    }
};
  
  
function renderLicenseLink(license) {
    if (license === 'Apache 2.0') {
        return '(https://opensource.org/licenses/Apache-2.0)';
    }
    else if (license === 'Boost 1.0') {
        return '(https://www.boost.org/LICENSE_1_0.txt)]';
    }
    else if (license === 'GNU AGPL v3.0') {
        return '(https://www.gnu.org/licenses/agpl-3.0)';
    }
    else if (license === 'GNU GPL v3.0') {
        return '(https://www.gnu.org/licenses/gpl-3.0)';
    }
    else if (license === 'GNU LGPL v3.0') {
        return '(https://www.gnu.org/licenses/lgpl-3.0)';
    } 
    else if (license === 'MIT') {
        return `(https://opensource.org/licenses/MIT)`;
    }
    else if (license === 'Mozilla 2.0') {
        return '(https://opensource.org/licenses/MPL-2.0)'
    }
    else {
        return '';
    }
};
  

function renderLicenseSection(license) {
    if (license === 'Apache 2.0') {
      return `${license}`;
    }
    else if (license === 'Boost 1.0') {
      return `${license}`;
    }
    else if (license === 'GNU AGPL v3.0') {
      return `${license}`;
    }
    else if (license === 'GNU GPL v3.0') {
      return `${license}`;
    }
    else if (license === 'GNU LGPL v3.0') {
      return `${license}`;
    } 
    else if (license === 'MIT') {
      return `${license}`;
    }
    else if (license === 'Mozilla 2.0') {
      return `${license}`
    }
    else {
      return '';
    }
};

  
  
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
    #  Description
    ${data.description}
  
    # Table of Contents
    * [Installation](#-Installation)
    * [Usage](#-Usage)
    * [License](#-License)
    * [Contributing](#-Contributing)
    * [Tests](#-Tests)
    * [Questions](#-Contact-Information)
    
    # Installation
    ${data.installation}
  
    # Usage
    ${data.usage}
  
    # License
    ${renderLicenseSection(data.license)}
  
    # Contributing
    ${data.contributing}
  
    # Tests
    ${data.tests}
  
    # Contact Information
    * GitHub Username: ${data.userName}
    * Contact Email: ${data.email}
    
  
  `;
}
  
export default generateMarkdown;
  
  
  