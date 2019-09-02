module.exports = function(client) {
    return function(message) {
        const fullCommand = message.content.substr(client.prefix.length) // Remove the leading exclamation mark
        const splitCommand = fullCommand.split(/\s+/) // Split the message up in to pieces for each space
        const cmd = splitCommand[0].toLowerCase(); // The first word directly after the exclamation is the command
        const args = splitCommand.slice(1); // All other words are arguments/parameters/options for the command

        console.log("Command: " + cmd);
        console.log("Arguments: " + args);
        if (!client.commands.has(cmd)) return message.channel.send("Lệnh không hỗ trợ");
        const command = client.commands.get(cmd);
        return command.run(client, message, args);
    }
};