const { clientActivity } = require("../config.json");

module.exports = (client, message) => {
  console.log(`[Client] ${client.user.tag} is Ready to use!`)
  client.user.setActivity(clientActivity);
};