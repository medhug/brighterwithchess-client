This projects assumes the use of a source-code editor such as VS Code and a MySQL database. Installation instructions can be followed at their respective websites:

For VSCode:
https://code.visualstudio.com/download


For mysql:
https://dev.mysql.com/doc/refman/8.0/en/installing.html

Note: the authentication type chosen for mysql during installation should be “Use Legacy Password Encryption”. The username and password chosen during this set up will be used for creating and using databases.


To set up the client of the website:

1. In the “main” branch of “https://github.com/medhug/brighterwithchess-client”, select the Code button and download a zip file of the code.
2. Upon unzipping, you will have a folder named “brighterwithchess-client-main”. 
3. You may move this folder into a better working directory outside of downloads folder like the documents or desktop folder. This step isn’t strictly necessary for the app to function but it is preferred. 
4. Using the terminal, either standalone or inside of VS code, navigate inside the “brighterwithchess-client-main” folder. Calling the “ls” command should show project files including ,but not limited to, package.json, Readme.md, and “src”. 
5. Once the location is verified, run “npm install” to install necessary node modules for the project.
6. The client-side of the website may be launched with calling in the terminal “npm start” but will not be operational until the server-side of the website is set up and running.
7. The website is meant to be viewed in a mobile-sized window, approximately reduced to its minimum width;


To set up the server of the website:

1. In the “project-before-heroku” branch of “https://github.com/medhug/brighterwithchess-server”, select the Code button and download a zip file of the code.
2. Upon unzipping, you will have a folder named “brighterwithchess-server-project-before-heroku”. 
3. You may move this folder into a better working directory outside of downloads folder like the documents or desktop folder. This step isn’t strictly necessary for the app to function but it is preferred.
4. Using the terminal, either standalone or inside of VS code, navigate inside the “brighterwithchess-server-project-before-heroku” folder. Calling the “ls” command should show project files including, but not limited to, package.json, Readme.md, “src” folder, and knexfile.js. 
5. Once the location is verified, run “npm install” to install necessary node modules for the project.
6. This project uses a database to hold new user info. Start the MySQL client terminal by running “mysql -h localhost -u <user> -p” and entering the default “user” password of “<useruser>”. The <user> and <useruser>  will correspond to the username and passwords selected during your own installation of mysql.
7. After logging in, to actually create the database use the following after the new “mysql>” prompt in the terminal:            mysql> CREATE DATABASE myNewDB;  keeping in mind that “myNewDB” can be chosen to any name. The name will be used later.
8. The knexfile.js in the “brighterwithchess-server-project-before-heroku” folder must be updated to include your own username, password, and database name.
9. The server of the website can be started using “node index.js” command in the terminal.


The website usage is as follows: 

1. After launching the client in the above steps you will see the landing page.
2. You may navigate to the sign up page using the nav button located near the bottom of the page.
3. Create a new user, navigate to the login page, and enter credentials.
4. The dashboard for the website become available with the new link. The dashboard will show progress on the site as lessons are taken and quizzes are passed.
5. More skills categories, lessons, and quizzes will be added as time allows.
