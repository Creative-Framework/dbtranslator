
# DBTranslator

![npm](https://img.shields.io/npm/v/dbtranslator) ![license](https://img.shields.io/npm/l/dbtranslator) ![issues](https://img.shields.io/github/issues/Creative-Framework/dbtranslator) ![stars](https://img.shields.io/github/stars/Creative-Framework/dbtranslator)

**DBTranslator** is a versatile translation package for Discord bots that allows you to manage multiple languages and set server-specific language preferences. It provides flexibility in how you organize your language files and integrates seamlessly with your existing bot setup.

## Features

- 🌐 **Multilingual Support:** Easily handle multiple languages for your Discord bot.
- 🛠️ **Customizable File Organization:** Organize your language files however you prefer.
- 📁 **Persistent Settings:** Save server-specific language preferences in a `serverData.json` file.
- 💻 **No External Dependencies:** Operates without requiring additional npm packages.

## Installation

Install `DBTranslator` via npm:

```bash
npm install dbtranslator
```

## Usage

### Basic Setup

1. **Importing and Initializing**

   Import `DBTranslator` and initialize it with a default language:

   ```javascript
   const DBTranslator = require('dbtranslator');
   const translator = new DBTranslator('en'); // Default language is English
   ```

2. **Setting Up Translations**

   You can organize your language files in any directory you prefer. For example:

   ```javascript
   const path = require('path');
   const DBTranslator = require('dbtranslator');

   // Set the path to your language files
   const languagesPath = path.join(__dirname, 'path_to_languages');

   const translator = new DBTranslator('en', languagesPath);
   ```

   Your language files can be in any format you choose, as long as they can be imported correctly by your bot.

3. **Setting and Using Language Preferences**

   Use the translator in your bot's message handler to set and use language preferences:

   ```javascript
   client.on('messageCreate', message => {
     if (message.content.startsWith('!setlang')) {
       const args = message.content.split(' ');
       const language = args[1];
       const serverId = message.guild.id;

       // Set the server's language preference
       translator.setServerLanguage(serverId, language);
       message.channel.send(`Language for this server set to ${language}`);
     }

     // Example usage of translation
     const footerText = translator.translate('request_by', message.guild.id) + " " + message.author.username;
     message.channel.send({ content: `Translation Example: ${footerText}` });
   });
   ```

### Configuration

- **Default Language:** Set a default language when initializing the `DBTranslator` instance.

  ```javascript
  const translator = new DBTranslator('en');
  ```

- **Language Files:** Place your language files in any directory. When initializing `DBTranslator`, specify the path to your language files if they are not in the default location.

- **Server Preferences:** DBTranslator will automatically create a `serverData.json` file in the package directory to store server-specific language preferences.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

Maintained by [AmtiXDev](https://github.com/lifeisunusefull). For any questions or suggestions, feel free to open an issue or reach out.

[![Discord Banner](https://api.weblutions.com/discord/invite/united-developers/)](https://discord.gg/united-developers)

[![Discord Banner](https://api.weblutions.com/discord/invite/xEnX3Kbmsm/)](https://discord.gg/xEnX3Kbmsm)
