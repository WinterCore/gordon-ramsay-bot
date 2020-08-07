import insult from "./insult.mjs"
import help   from "./help.mjs";
import gif    from "./gif.mjs";
import curse  from "./curse.mjs";

export const handleCommand = async (msg, msgContent) => {
    const [command, ...args] = msgContent.split(' ');
    switch (command.toLowerCase()) {
    case "insult":
        await insult(msg, args);
        break;
    case "help":
        await help(msg, args);
        break;
    case "gif":
        await gif(msg, args);
        break;
    case "curse":
        await curse(msg, args);
        break;
    default:
        await msg.reply("The command is as useless as your entire family generation you fucking donkey");
        break;
    }
};
