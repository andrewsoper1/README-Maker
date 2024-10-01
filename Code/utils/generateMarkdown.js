function renderLicenseBadge(license) {
    if (license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    else if (license === 'Boost 1.0') {
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    }
    else if (license === 'GNU AGPL v3.0') {
        return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    }
    else if (license === 'GNU GPL v3.0') {
        return '![![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }
    else if (license === 'GNU LGPL v3.0') {
        return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    } 
    else if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`; 
    }
    else if (license === 'Mozilla 2.0') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    else {
        return '';
    }
};
  


function renderLicenseSection(license) {
    if (license === 'Apache 2.0') {
      return `This project is licensed under ${license}`;
    }
    else if (license === 'Boost 1.0') {
      return `This project is licensed under ${license}`;
    }
    else if (license === 'GNU AGPL v3.0') {
      return `This project is licensed under ${license}`;
    }
    else if (license === 'GNU GPL v3.0') {
      return `This project is licensed under ${license}`;
    }
    else if (license === 'GNU LGPL v3.0') {
      return `This project is licensed under ${license}`;
    } 
    else if (license === 'MIT') {
      return `This project is licensed under ${license}`;
    }
    else if (license === 'Mozilla 2.0') {
      return `This project is licensed under ${license}`;
    }
    else {
      return '';
    }
};

  
  
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
    ${data.description}
  
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
    
## <a id='Installation'></a>Installation
    ${data.installation}
  
## <a id='Usage'></a>Usage
    ${data.usage}
  
## <a id='License'></a>License
    ${renderLicenseSection(data.license)}
  
## <a id='Contributing'></a>Contributing
    ${data.contributing}
  
## <a id='Tests'></a>Tests
    ${data.tests}
  
## <a id ='Questions'></a> Questions
    * GitHub Username: ${data.userName}
    * Contact Email: ${data.email}
    
  
`;
}
  
export default generateMarkdown;
  
  
  