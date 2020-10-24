# CELLARES TASK

## Requirements
For successful launch of the app install pm2 package globally with this line: `npm install -g pm2`
* NodeJS should be installed on the system
* Angular should be installed on the system
##
Task was accomplished with help of Angular, Express, NodeJS, PM2
##
Programming language used: TypeScript
##
* To launch application clone repo to your machine
* Navigate to "cellares" folder
* There you will find launcher.sh script
* Launch it with bash and give some time to build all apps and serve them
* Navigate to http://localhost:4001 to open UI application
* UI app is being served by simple server developed for this purpose. Professional solution is preferred like NGINX.
Can be set up if more time given.
* To kill PM2 processes run `pm2 delete all`
##
In case pm2 and launch.sh script would fail for any reason. All apps can be launched in dev mode
* IMPORTANT: All three processes should be launched in different terminal windows
* For client app: navigate to client_ui folder and run command `npm install` and then `ng serve`
* For platform API: navigate to platform_api folder and run commands `npm install` and `npm run dev`
* For simulator API: navigate to simulator folder and run commands `npm install` and `npm run dev`
* Navigate to http://localhost:4200 to open UI application
* To stop app from running just close terminal windows or kill processes. 
##

There are one known bug that i did not finish fixing. To stop data generation user need to click on STOP PROCEDURE button.
Missed functionality to trigger this when counter is stopped. But overall app works as expected. I started implementation for logging. You can see sample of code being commented out 
for DB and Logger. For now i am redirecting logs to console. Next step would be to write it to DB. Also with more time 
application could be improved by introducing event bus with listeners to make it easier to poll data from different 
sources. Also API could be refactored and improved to make it easier to add new instruments and reduce code duplication. 
Configuration services needed to be added to successfully set apps to run for different modes. Unfortunately need a bit 
more time to write good solution for it. Right now I have couple hardcoded values (for API addresses). Also i would add 
tests for each component (UI/API/SIM). Started to add them but figured i would not be able to finish and focused more 
on stable functionality. But strongly believe that testing should be added. Also i didn't provided documentation for API functions.
With a bit more time Swagger documentation could be added with examples.

##
If i missed something please let me know. I will be glad to provide explanations or fixes.
##
Thanks for the task, it was interesting and challenging. Looking forward to your feedback :)
