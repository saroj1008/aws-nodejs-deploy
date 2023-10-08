## npm init
## npm i express dotenv
## change it to "start": "node server.js"
## Create new repository in github and copy git add remote url and paste it in powershell in vs code
## push all to origin main master (or any branch) after that
## 



## works with aws
## Create instance-> launch instance and Create key pair (to communicate with server)
## add htttp anywhere ipv4 in security groups
## After downloading key value pair open the terminal then open cmd poweshell and change to directory where key pair is downloaded then open that in terminal and copy and paste SSH Client Example ie. at the button and paste it there and run ubuntu in terminal


## Then to deploy create actions


## Github actions -> Configure node.js
# remove pull_request
# change node version to 18.X
# runs-on: self-hosted (replace ubuntu latest and change it to server where we run it will run there)

## in github action,  - run: npm ci -> This command will run first and and download all files
## run: npm run build --if-present {this will run to build} but remove now

## this one should run : name: Node.js CI

## then setting actions -> runner
## create New self-hosted runner
## select linux
## select downloads one by one and paste it in ubuntu instance created and running on powershell
## configure everything in ubuntu

## All default _work

## do ls and see svc.sh........ run : sudo ./svc.sh install
## Above step will create runner check it in settings: runners
## see same ip addresss will be there in runner and the instance ip address
## do:  sudo ./svc.sh start (to start)
# Now aws instance is connected with our github

## Our github repo will be inside _work: do ls to check it
to see hidden file: ls -la
to open and see file: cat .gitignore (it will show gitignore file data)


Install nojejs now
sudo apt update : to update all files
install nodejs: sudo apt-get install -y nodejs (y means all will be yes don;t ask any thing)
download nginx: sudo apt-get install -y nginx (server)
pm2 to install like sudo npm i -g pm2, its in production level like nodemon in development phase....
If no npm install npm too.

Now set server: 

cd /etc/nginx/sites-available (go to this file)

ls

sudo nano default : do this to edit the default port
cntrl s then cntrl x

restart nginx: sudo systemctl restart nginx

goto your project file: ~/actions-runner/_work/aws-nodejs-deploy/aws-nodejs-deploy


now run server:
use pm2 to run here
run server:  pm2 start server.js --name="Backend"

make a change in .yaml file and change it to npm pm2