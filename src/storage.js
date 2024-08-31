const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'serverData.json');

let serverPreferences = {};
if (fs.existsSync(filePath)) {
  serverPreferences = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function savePreferences() {
  fs.writeFileSync(filePath, JSON.stringify(serverPreferences, null, 2));
}

function getServerLanguage(serverId) {
  return serverPreferences[serverId] || 'en';
}

function setServerLanguage(serverId, language) {
  serverPreferences[serverId] = language;
  savePreferences();
}

module.exports = {
  getServerLanguage,
  setServerLanguage
};