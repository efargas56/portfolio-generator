// const fs = require('fs')

const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log('Please enter your name!');
            }
        }
        },
        {
        type: 'input',
        name: 'Github',
        message: 'What is your GitHub name?'
        },
        {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself in an about section?',
        default: true
        },
        {
        type: 'input',
        name: 'About Me',
        message: 'tell me about yourself:',
        when: ({ confirmAbout }) => {
            if (confirmAbout) {
                return true;
            } else {
                return false;
            }
            }
        }
    ]);
};
const promptProject = portfolioData => {
    // only do do this the first time to prevent overide use if statement
    if(!portfolioData.projects){
    portfolioData.projects = [];
    }
    console.log(`
        =================
        Add a New Project
        =================
        `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter your project name!');
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project about? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter a description of your project');
                }
            }
        },
        {
            type: 'checkbox',
            name: 'Languages',
            message: 'What language does your program use?(Check all that apply)',
            choices: ['javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your Github Repo? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('A link to your GitHub repo is required!');
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to add another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
     if(projectData.confirmAddProject){
         return promptProject(portfolioData);
     } else {
         return portfolioData;
     }
});
}
promptUser().then(promptProject).then(portfolioData =>{
    console.log(portfolioData)
});
// const generatePage = require('./src/page-template')

// const pageHTML = generatePage(name, github);


// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });