const random = require("../utils/random");
const serviceAccount = require("../serviceAccountKey.json");
const admin = require("firebase-admin");
require('dotenv').config();

const DB = process.env.FIRESTORE;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://followdraw-b1171.firebaseio.com"
});

class CustomCommands {
  constructor(client) {
    this.client = client;
    this.commands = {
      winner: { fn: this.winner, type: "private" },
      drawme: { fn: this.drawme, type: "public" },
      saludame: { fn: this.saludame, type: "public" },
    };
    this.db = admin.firestore();
    this.userList = [];
  }

  async drawme(context, target, msg) {
    const imageUrl = msg.replace(/(!drawme)/, "").trim()
    if (this.userList.map(item => item.name).includes(context.username) && false) {
      this.client.say(
        target,
        `@${context.username}, ¡Ya tengo tu imagen te estare dibujando pronto!`
      );
    } else {
      const userToDraw = { name: context.username, url: imageUrl}
      this.userList.push(userToDraw);
      await this.db.collection(DB).add(userToDraw);
      this.client.say(
        target,
        `@${context.username}, Genial ya tengo tu imagen, pronto te dibujare`
      );
    }
  }
  async saludame(context, target, msg) {
    this.client.say(
      target,
      `@${context.username}, ¡Registro exitoso! VoHiYo! ${msg}`
    );
  }

  async winner(context, target) {
    let winner = [];
    let twitch = this.db.collection(DB);
    await twitch
      .orderBy("username", "asc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          winner.push(doc.data());
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
    let randomUser = random(winner);
    this.client.say(
      target,
      `BloodTrail El Ganador es @${randomUser.username} HolidayPresent`
    );
  }
}

module.exports = CustomCommands;
