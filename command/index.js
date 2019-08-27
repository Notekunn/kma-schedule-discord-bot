const helpCommand = require("./help")
const { prefix } = require("../config/bot");
const commandFile = new Object({
    'ping': 'ping',
    'help': 'help',
})
const commands = new Object();
Object.keys(commandFile).forEach(function (key) {
    const path = `./${commandFile[key]}.js`;
    commands[key] = require(path);
})
module.exports = function (client) {
    return function (message) {
        const fullCommand = message.content.substr(prefix.length) // Remove the leading exclamation mark
        const splitCommand = fullCommand.split(/\s+/) // Split the message up in to pieces for each space
        const command = splitCommand[0].toLowerCase(); // The first word directly after the exclamation is the command
        const args = splitCommand.slice(1); // All other words are arguments/parameters/options for the command

        console.log("Command: " + command);
        console.log("Arguments: " + args);
        if (!commands.hasOwnProperty(command)) return;
        commands[command].run(client, message, args, commandFile);
    }
};