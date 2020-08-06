import Discord           from "discord.js";
import { handleCommand } from "./commands/index.mjs";

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
    if (msg.content.startsWith(".g ")) {
        handleCommand(msg, msg.content.slice(3));
    }
});

client.login(process.env.GORDON_TOKEN).catch(console.log);

process.on('SIGINT', function() {
    client.destroy();
    console.log("Logging out");
    process.exit();
});
