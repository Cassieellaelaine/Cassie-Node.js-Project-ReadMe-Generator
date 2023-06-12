function renderLicenseBadge(license) { ; 
if(license !== "no license") {
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
} else {
  license = ""
}
};

function renderLicenseLink(license){
  if(license !== "no license"){
    return `- [License](#license)`
  } else {
    return ``
  }
}

function renderLicenseSection(license){
  if(license !== "no license"){
    return `## License
    This project is under the ${license} license
    `
  } else {
    return ``
  }
}


function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of content
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
