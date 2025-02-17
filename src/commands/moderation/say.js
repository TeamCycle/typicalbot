const Command = require("../../structures/Command");
const Constants = require(`../../utility/Constants`);

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: "Makes the bot send a message with the content used.",
            usage: "say [#channel] <content>",
            aliases: ["speak"],
            permission: Constants.Permissions.Levels.SERVER_MODERATOR,
            mode: Constants.Modes.STRICT
        });
    }

    execute(message, parameters, permissionLevel) {
        const args = /(?:(-j(?:son)?)\s+)?(?:<#(\d+)>\s+)?((?:.|[\r\n])+)?/i.exec(parameters);
        if (!args) return message.error(this.client.functions.error("usage", this));

        const json = !!args[1];
        const channel = message.guild.channels.get(args[2]) || message.channel;
        const content = args[3];

        if (json) {
            try {
                const jsonParse = JSON.parse(content);

                channel.send("", jsonParse).catch(err => message.error("I am missing the SEND_MESSAGES permission in the channel requested."));
            } catch (err) {
                message.error("Invalid JSON was provided.");
            }
        } else {
            channel.send(content, { disableEveryone: false }).catch(err => message.error("I am missing the SEND_MESSAGES permission in the channel requested."));
        }
        

        if (message.deletable) message.delete({ timeout: 500 });
    }
};
