function renderLicenseBadge(license) { let licenseType = license.license; 
if(licenseType === 'MIT') {
  yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else if (licenseType === 'GPLv3') {
  yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
} else if (licenseType === 'GPL') {
  yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
} else {
  license.license = " "
}
return yourLicense;
};


function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
