// /* eslint-disable no-var */
// var commands = new Map([
// 	['120', 10],
// 	['130', 22],
// 	['135', 27],
// 	['timers', 0],
// ]);

// var commandCooldown = new Map([
// 	['120', new Map()],
// 	['130', new Map()],
// 	['135', new Map()],
// 	['timers', new Map()],
// ]);

// var handler = function(message, command) {

// 	let delay = () => {
// 		setTimeout(() => {
// 			commandCooldown.get(command).delete(message.author.id);
// 			message.channel.send(`${command} due in 10 @nightshade`);
// 		}, commands.get(command) * 1000);
// 	}

// 	if(commandCooldown.get(command).has(message.author.id)) {
// 		let init = commandCooldown.get(command).get(message.author.id);
// 		let curr = new Date();
// 		let diff = Math.round((curr - init) / 1000);
// 		let time = commands.get(command);
// 		message.channel.send(`${time - diff} seconds left on 10 until ${command}`);
// 	}
// 	else {
// 		if(command === '120') {
// 			message.channel.send('piss1');
// 			commandCooldown.get(command).set(message.author.id, new Date());
// 			console.log(commandCooldown);
// 			delay();
// 		}
// 		if(command === '130') {
// 			message.channel.send('piss2');
// 			commandCooldown.get(command).set(message.author.id, new Date());
// 			console.log(commandCooldown);
// 			delay();
// 		}
// 	}
// }

// module.exports = { commands, commandCooldown, handler };