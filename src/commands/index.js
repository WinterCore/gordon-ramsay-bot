import insult from "./insult.js"
import help   from "./help.js";

export const handleCommand = (msg, msgContent) => {
    const [command, ...args] = msgContent.split(' ');
    switch (command.toLowerCase()) {
    case "insult":
        insult(msg, args);
        break;
    case "help":
        help(msg, args);
        break;
    default:
        msg.reply("The command is as useless as your entire family generation you fucking donkey");
        break;
    }
};
