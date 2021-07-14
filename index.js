const shell = require("shelljs");

const serverNamePM2 = "server";

// const { exec } = require("child_process");



const restartServer = async () => {
	//  exec(`/usr/local/bin/pm2 restart ${serverNamePM2}`, (error, data, getter) => {
	// 	if(error){
	// 		console.log("error",error.message);
	// 		return;
	// 	}
	// 	if(getter){
	// 		console.log("getter data",data);
	// 		return;
	// 	}
	// 	console.log("data",data);
	// })
	
	const restartPM2 = await shell.exec("/usr/local/bin/pm2 restart server");
	if (restartPM2.code !== 0) {
		return shell.echo(`Error: pm2 couln't restarte the server.`)
	}
	return restartPM2;
}

const stopServer = async () => {
	const stopPM2 = await shell.exec(`/usr/local/bin/pm2 stop server`);
	if (stopPM2.code !== 0) {
		return shell.echo(`Error: pm2 couldn't stop the server.`);
	}
	return stopPM2;
}

const renewCertbot = async () => {

	// const renewIt = await shell.exec("certbot renew --dry-run");
	const renewIt = await shell.exec("certbot renew");
	
	if (renewIt.code !==0) {
		return shell.echo('Error: certbot renew function');
		// shell.exit(1);
	}

	return renewIt
}


const init = async () => {
	try {
		await stopServer();
		await renewCertbot();
		await restartServer();
		console.log(Date.now())
	} catch (err) {
		await restartServer();
		shell.echo("Error: Catch init something went wrong!")
		
	}

}

init();



