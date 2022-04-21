// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![license](https://img.shields.io/badge/license-${data.license}-blue)
  ***
  ## Table of Contents
  - [Description](#description)
  - [Visual Presentation](#visual-presentation)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ***
  ## Description
  ${data.description}
  ***
  ## Technologies Used
  ${data.technologies}
  ***
  ## Visual Presentation
  ![VisualPresentation](images/)
  ***
  ## Installation
  ${data.installation}
  ***
  ## Usage
  ${data.usage}
  ***
  ## Contribution
  ${data.contributions}
  ***
  ## Testing
  ${data.testing}
  ***
  ## Additional Info
  - Executable: ${data.deployable}
  - Github: ${data.github}(https://github.com/${data.github})
  - Email: ${data.email}
`
}

module.exports = generateMarkdown