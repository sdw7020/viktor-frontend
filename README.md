# viktor front end


## Testing instructions
### Node.js
This project runs on Node.js so you need to install it if you haven't already.
To install Node.js, go to [the downloads page](https://nodejs.org/en/download/) and download the latest version in the 8.x.x range.

### Setup
After having installed node, `cd` into the viktor-frontend folder and run `npm install`.  
When the dependencies finish installing, run `npm run build` to create a build folder.  
Keep this build folder, you will need it for the backend setup.  
Now go to the viktor-backend readme.md and follow the instructions there.

### Usage
After you've setup the backend, go to the ip of the host of the backend server. If you are hosting it on the computer you're reading this on, go to `http://localhost:PORT` where port is the port you selected for the backend. (default 8080)  
On that page you should see a login screen. The default password is `hunter2`.  
After you have logged in, you will see the overview screen, this is a table of all user entries. On the right you can add a user. Using the red button on the left you can remove a user and the green button on the left will let you add a pass to a user. After pressing the green button you should scan the pass you wish to add.

## License
This project was brought to you by the kind folks of the viktor working group.

This group consists of: Jim Damman, Mees van Dijk, Loek van der Gugten, Tijmen Krijnen, Shan-wei Mensing and Sytze de Witte

MIT © The viktor working group
