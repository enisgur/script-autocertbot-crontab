# How to setup in my ubuntu server

on server

```
apt update
apt install cron
sudo systemctl enable cron
// to run nodejs script find node path
which node
// output => /usr/bin/node
crontab -e
// make sure on script folder do ""npm i --save"" to install all dependencies
0 2 * * 0 /usr/bin/node /root/myscripts/renewcertbot/index.js
// every Sunday at 2 am
```