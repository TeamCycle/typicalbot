const Command = require("../../structures/Command");
const Constants = require(`../../utility/Constants`);
const pm2 = require("pm2");

const config = require("../../../config");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: "A command to restart the bot or a cluster.",
            usage: "restart <cluster-name>",
            permission: Constants.Permissions.Levels.TYPICALBOT_MAINTAINER,
            mode: Constants.Modes.STRICT
        });
    }

    execute(message, parameters, permissionLevel) {
        let processes;
        
        if (!parameters || parameters === "all") {
            const list = [];

            for (let i = 1; i <= Number(process.env.CLUSTER_COUNT); i++) {
                list.push(`${config.clusterServer}-${config.clusterBuild ? `${config.clusterBuild}-` : ""}${i}`); 
            }

            processes = list.join(" ");
        } else processes = parameters;

        pm2.connect(function(err) {
            if (err) console.error(err);
            
            pm2.restart(processes, function(err, apps) {
                if (err && err.message.includes("process name not found")) return message.error("Process not found.");
                else if (err) {
                    message.error("An error occured while trying to restart, check the console.");
                    console.error(err);
                } else message.success("Restarted process.");

                pm2.disconnect();
            });
        });
    }
};
