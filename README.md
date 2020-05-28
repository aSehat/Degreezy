# Degreezy
MEAN stack user focused degree planning

Practice with MEAN stack development

Alternative to currently implemented software solution by Rensselaer Polytechnic Institute. General class data scraped for demonstration purposes prior to actual implementation. University login system implemented. 

# How To Use

> Install packages with npm
> Command 'tsc' to compile typscript code
> Command 'npm start' to run node server
> localhost:3000/landingPage.html

For testing purposes: if for some reason a user does not have a university provided login, a manual entry into the mongoDB database can be made followed by manual rerouting to 'localhost:3000/?result="' + 'designated rcs id' + '" ' . The suggested url is not literal, but a demonstration of the concatenation required. 
