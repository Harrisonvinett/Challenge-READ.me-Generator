 const inquirer = require('inquirer');
  const fs = require('fs');
  
  const generateReadMe = ({ name, description, tableOfContents, installation, usage, credits, lincense, contributing, tests, questions }) =>
    `   # ${name}

   ## Description
        ${description}

  ## Table of Contents
        ${tableOfContents}

  ## Installation

        ${installation}

 ## Usage

        ${usage}

 ## Credits

        ${credits}

 ## Lincense

        ${lincense}

         

 ## How to Contribute

        ${contributing}

 ## Tests

        ${tests}

## Questions

        ${questions}
    
        🏎 - - - - - - - - - - - - - - - - - - - - - - - - - 
     `;
  
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your application's name?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter project description',
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'Add tableOfContents',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators . . . ',
      },
      {
        type: 'list',
        name: 'lincense',
        message: 'Which lincense is your project using?',
        choices: ['apache-2.0','artistic-2.0','mit','cc','mpl-2.0','postgresql','ofl-1.1']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How will other users contribute',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How to run your application:',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'How a user will ask a question about application:',
      },
    ])
    .then((answers) => {
      const readMePageContent = generateReadMe(answers);
  
      fs.writeFile('README.md', readMePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    });
  
        type: 'input',
        name: 'questions',
        message: 'How a user will ask a question about application:',
      },
    ])
    .then((answers) => {
      const readMePageContent = generateReadMe(answers);
  
      fs.writeFile('README.md', readMePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    });
  
