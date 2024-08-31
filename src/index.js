const fs = require('fs');
const path = require('path');
const { getServerLanguage, setServerLanguage } = require('./storage');

class DBTranslator {
  constructor(defaultLanguage = 'en') {
    this.defaultLanguage = defaultLanguage;
  }

  loadTranslations(language) {
    const filePath = path.join(__dirname, 'languages', `${language}.json`);
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } else {
      console.warn(`Language file for '${language}' not found. Defaulting to ${this.defaultLanguage}.`);
      return JSON.parse(fs.readFileSync(path.join(__dirname, 'languages', `${this.defaultLanguage}.json`), 'utf-8'));
    }
  }

  translate(key, serverId) {
    const language = getServerLanguage(serverId);
    const translations = this.loadTranslations(language);
    return translations[key] || key;
  }

  setServerLanguage(serverId, language) {
    setServerLanguage(serverId, language);
  }
}

module.exports = DBTranslator;