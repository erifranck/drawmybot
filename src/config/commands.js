const copies = require("../data/copies.json");

const commands = {
  private: {
    patreon: copies.commands.patreon,
    comic: copies.commands.comic,
    social: copies.commands.social,
    twitch: copies.commands.twitch,
    youtube: copies.commands.youtube
  },
  public: {
    patreon: copies.commands.patreon,
    comic: copies.commands.comic,
    social: copies.commands.social,
    twitch: copies.commands.twitch,
    youtube: copies.commands.youtube,
    discord: copies.commands.discord
  }
};

module.exports = commands;
