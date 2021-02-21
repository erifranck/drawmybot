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
    pc: copies.commands.pc,
    setup: copies.commands.setup,
    discord: copies.commands.discord
  }
};

module.exports = commands;
