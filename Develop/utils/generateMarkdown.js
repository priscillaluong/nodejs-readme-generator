// TODO: Create a function that returns a license badge based 
// on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

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
  
  ## Questions:
  
  You can contact me by finding me on GitHub @${data.github} or emailing me at ${data.email}
`;

}

module.exports = generateMarkdown;
