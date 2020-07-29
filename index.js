/* eslint-disable no-var */
const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json');
var commands = new Map([
	['155', 3000],
	['160', 3600],
	['165', 3900],
	['170', 4200],
	['180', 4800],
	['185', 3900],
	['190', 4800],
	['195', 5400],
	['200', 6000],
	['205', 6300],
	['210', 6900],
	['215', 7500],
	['timers', 0],
	['test1', 10],
]);

var commandCooldown = new Map([
	['155', new Map()],
	['160', new Map()],
	['165', new Map()],
	['170', new Map()],
	['180', new Map()],
	['185', new Map()],
	['190', new Map()],
	['195', new Map()],
	['200', new Map()],
	['205', new Map()],
	['210', new Map()],
	['215', new Map()],
	['test1', new Map()],
	['timers', new Map()],
]);
// const { commands, commandCooldown } = require('./commands');
// const { handler } = require('./commands');

client.login(config.token);
console.log(commands);
console.log(commandCooldown);

var handler = function(message, command) {

	let delay = () => {
		setTimeout(() => {
			commandCooldown.get(command).delete(message.author.id);
			message.channel.send(`${command} due in 10 @everyone`);
		}, commands.get(command) * 1000);
	};

	if(commandCooldown.get(command).has(message.author.id)) {
		let init = commandCooldown.get(command).get(message.author.id);
		let curr = new Date();
		let diff = Math.round((curr - init) / 1000);
		let time = commands.get(command);
		let timeleft = Math.round(time - diff);
		message.channel.send(`${timeleft} seconds left on 10 until ${command}`);
	}
	else {
		if(command === '155') {
			message.channel.send('Timer for 155 set for 50m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '160') {
			message.channel.send('Timer for 160 set for 1h from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '165') {
			message.channel.send('Timer for 165 set for 1h5m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '170') {
			message.channel.send('Timer for 170 set for 1h10m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '180') {
			message.channel.send('Timer for 180 set for 1h20m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '185') {
			message.channel.send('Timer for 185 set for 1h5m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '190') {
			message.channel.send('Timer for 190 set for 1h20m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '195') {
			message.channel.send('Timer for 195 set for 1h30m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '200') {
			message.channel.send('Timer for 200 set for 1h40m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '205') {
			message.channel.send('Timer for 205 set for 1h45m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '210') {
			message.channel.send('Timer for 210 set for 1h55m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === '215') {
			message.channel.send('Timer for 215 set for 2h5m from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}
		if(command === 'test1') {
			message.channel.send('Timer for test1 set for 10s from now');
			commandCooldown.get(command).set(message.author.id, new Date());
			console.log(commandCooldown);
			delay();
		}

		// if(command === '130') {
		// 	let count = 5

		// 	const counter = setInterval(() => {
		// 		if (count > 0) {
		// 			message.channel.send(count);
		// 			count--;
		// 		} else {
		// 			clearInterval(counter)
		// 		}
		// 	}, 1000);
		// 	message.channel.send('piss2');
		// 	commandCooldown.get(command).set(message.author.id, new Date());
		// 	console.log(commandCooldown);
		// 	delay();
		// }
		// if(command === 'timers') {
		// 	let init = commandCooldown.get(command).get(message.author.id);
		// 	let curr = new Date();
		// 	let diff = Math.round((curr - init) / 1000);
		// 	let time = commands.get(command);
		// 	let timeleft = Math.round(time - diff);
		// 	message.channel.send(`${timeleft} seconds left on 10 until ${command}`);
		// 	const embed = new discord.MessageEmbed({
		// 		title: 'I pissed on the egg Im sorry',
		// 		fields: [{
		// 			name: `**${command}**`,
		// 			value: `${timeleft} seconds left`,
		// 		}],
		// 	});
		// 	message.channel.send(embed);
		// }
	}
};

client.on('ready', () => {
	console.log(`${client.user.username} has sucked a big cock`);
});

client.on('message', message => {

	if(message.content.toLowerCase().startsWith('!155')) {
		handler(message, '155');
	}
	else if(message.content.toLowerCase().startsWith('!160')) {
		handler(message, '160');
	}
	else if(message.content.toLowerCase().startsWith('!165')) {
		handler(message, '165');
	}
	else if(message.content.toLowerCase().startsWith('!170')) {
		handler(message, '170');
	}
	else if(message.content.toLowerCase().startsWith('!180')) {
		handler(message, '180');
	}
	else if(message.content.toLowerCase().startsWith('!185')) {
		handler(message, '185');
	}
	else if(message.content.toLowerCase().startsWith('!190')) {
		handler(message, '190');
	}
	else if(message.content.toLowerCase().startsWith('!195')) {
		handler(message, '195');
	}
	else if(message.content.toLowerCase().startsWith('!200')) {
		handler(message, '200');
	}
	else if(message.content.toLowerCase().startsWith('!205')) {
		handler(message, '205');
	}
	else if(message.content.toLowerCase().startsWith('!210')) {
		handler(message, '210');
	}
	else if(message.content.toLowerCase().startsWith('!215')) {
		handler(message, '215');
	}
	else if(message.content.toLowerCase().startsWith('!test1')) {
		handler(message, 'test1');
	}
	// else if(message.content.toLowerCase().startsWith('!timers')) {

	// 	let init = commandCooldown.get(command).get(message.author.id);
	// 	let curr = new Date();
	// 	let diff = Math.round((curr - init) / 1000);
	// 	let time = commands.get(command);
	// 	let timeleft = Math.round(time - diff);
	// 	const embed = new discord.MessageEmbed({
	// 		title: 'I pissed on the egg Im sorry',
	// 		fields: [{
	// 			name: `**${command}**`,
	// 			value: `${timeleft} seconds left`,
	// 		}],
	// 	});
	// 	message.channel.send(embed);
	// }

});