exports.run = function(client, message, args) {
    const [email] = args;
    client.events.set(message.author.id, {
        type: 'schedule:login',
        data: {
            email,
            password: undefined,
        }
    });
   if(!email) message.channel.send("Nhập tài khoản");
   else message.channel.send("Nhập password!");
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  dmOnly: true,
  aliases: ['cs'],
  permLevel: 0
};

exports.help = {
  name : "login",
  description: "Đăng nhập vào tài khoản sinh viên",
  usage: "login [student code]"
};