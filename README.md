# nodejs-readme-generator

## Application Description

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions.

This is a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). This allows the project creator to devote more time to working on the project.

The application will be invoked by using the following command:

```bash
node index.js
```

I was given the below User Story and Acceptance Criteria:

User Story:

![User Story](/Develop/assets/images/user-story.png) 

Acceptance Criteria:

![Acceptance Criteria](/Develop/assets/images/acceptance.png) 

## Required modules / packages:

* Inquirer package
* Node.js fs module

## Module.exports: 

Module.exports was also used in the generateMarkdown.js so the generateMarkdown function can be called from index.js

generateMarkdown.js:
```
module.exports = generateMarkdown;
```
index.js:
```
const generateMarkdown = require('./utils/generateMarkdown.js')
```

# Application Interaction: 

![Application Interaction Start Screenshot](/Develop/assets/images/start.png)

* Navigate to the correct folder and run the following command: 
```bash
node index.js
```

![Application First Prompt Screenshot](/Develop/assets/images/first-prompt.png)

The user will be prompted with a series of questions, the first question being 'What is the title of your project?'.

![Application User Input Screenshot](/Develop/assets/images/second-prompt.png)

* The user input will be written to the generated README.md file. 

![Application Third Prompt Screenshot](/Develop/assets/images/third-prompt.png)

![Application List Prompt Screenshot](/Develop/assets/images/list.png)

* There is a list prompt which allows the user to select from five different 'license' options. 

![Application Finished Screenshot](/Develop/assets/images/finished.png)

* Once all questions have been answered, there is a console message which lets the user know they have successfully generated a README.md file. 

![Application Generated Readme Screenshot](/Develop/assets/images/readme.png)

* The README file is generated within the same directory. 

![Application Sample README Screenshot](/Develop/assets/images/full-display.png)

* See above sample README which contains a table of contents as well as the Description, Installation Guidelines etc. from the user input.

## Screenshot of Sample README:

![Generated README sample Screenshot](/Develop/assets/images/sample2.png) 
![Generated README sample Screenshot](/Develop/assets/images/sample.png) 

## URL to Walkthrough Video of Application:

[Click here](https://youtu.be/qqUTjRNRPQ4) 

## Link to Sample README file:

[Click here](https://github.com/priscillaluong/nodejs-readme-generator/blob/main/Develop/README%20(sample).md)
### Final note:

*Any feedback to improve code or implement best practice would be appreciated* 😊