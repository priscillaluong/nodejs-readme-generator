// TODO: Create a function that returns a license badge based 
// on which license is passed in
// If there is no license, return an empty string
let licenseBadge;
let licenseLink;
let licenseSection;

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
    case 'BSD':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
      break;
    case 'GNU':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;
    case 'IBM':
      licenseBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';
      break;
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    default:
      licenseBadge = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      licenseLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
    case 'BSD':
      licenseLink = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
      break;
    case 'GNU':
      licenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;
    case 'IBM':
      licenseLink = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';
      break;
    case 'MIT':
      licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    default:
      licenseLink = '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache':
      licenseSection = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
    case 'BSD':
      licenseSection = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
      break;
    case 'GNU':
      licenseSection = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;
    case 'IBM':
      licenseSection = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';
      break;
    case 'MIT':
      licenseSection = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    default:
      licenseSection = '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  renderLicenseBadge(license);
  renderLicenseLink(license);
  renderLicenseSection(license);

  return `# ${data.title}

  ## Description:
  
  ${data.description}
  
  ## Installation Instructions:
  
  ${data.installation}
  
  ## Usage Information:
  
  ${data.usage}
  
  ## Contribution Guidelines:
  
  ${data.contribution}
  
  ## Test Instructions:
  
  ${data.tests}
  
  ## License:
  
  ${license}
  ${licenseBadge}
  
  ## Questions:
  
  You can contact me by finding me on GitHub @${data.github} or emailing me at ${data.email}
`;

}

module.exports = generateMarkdown;
