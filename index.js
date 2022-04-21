const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./util/generateMarkdown')

//prompt for user input
const questions = [

  {
    message: 'Title of the project',
    type: 'input',
    name: 'title'
  },
  
  {
    message: 'What is the license for the project',
    type: 'list',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    name: 'license'
  },

  {
    message: 'Description of the application',
    type: 'input',
    name: 'description'
  },

  {
    message: 'What type of technologies did you use',
    type: 'input',
    name: 'technologies'
  },

  {
    message: 'What are the installation instructions?',
    type: 'input',
    name: 'installation'
  },

  {
    message: 'What is the app used for',
    type: 'input',
    name: 'usage'
  },

  {
    message: 'Any contributions to the project?',
    type: 'input',
    name: 'contributions'
  },

  {
    message: 'Type of testing used',
    type: 'input',
    name: 'testing'
  },

  {
    message: 'What is the deployable to your app',
    type: 'input',
    name: 'deployable'
  },

  {
    message: 'What is your github user?',
    type: 'input',
    name: 'github'
  },

  {
    message: 'What is your email',
    type: 'input',
    name: 'email'
  },
  
  
]

//function for writing to the read me file
function fileWrite(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) { throw err }
    console.log('Your readMe has been created!')
  })
}

//intializing the program to prompt and get inputs from the user
function intialize () {
  inquirer.prompt(questions)
    .then(input => {
      console.log(input)
      fileWrite("exampleReadme.md", generateMarkdown(input))
    })
    .catch(err => console.log(err))
}

//initialize function call
intialize()
