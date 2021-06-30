//Takes args from the command line and returns an object
const minimist = require("minimist");

module.exports = () => {
  console.log("Welcome to your reading list");
  //Using the args from the command line, saves the args object to the const args
  const args = minimist(process.argv.slice(2));

  //If terminal command is empty, help
  let cmd = args._[0] || "help";

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }

  //Switch statement if cmd is
  switch (cmd) {
    case "search":
      require("./commands/search")(query);
      break;
    case "add":
      require("./commands/readingList")(isbn);
      break;
    default:
      console.error(`${cmd} command does not exist!`);
      break;
  }
};
