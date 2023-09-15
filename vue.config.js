const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const dotenv = require("dotenv"); //Loads env variable files
//Validation check

let envfile = ".env";
if (process.env.NODE_ENV) {
  envfile += "." + process.env.NODE_ENV + ".local"; //CREATING ENV FILE NAME
}
//ASSIGNING PATH TO DOTENV
const result = dotenv.config({
  path: path.resolve(`organisations/${process.env.VUE_APP_DIRECTORY}`, envfile),
});

// THROWS DOTENV ERROR IN TERMINAL
if (result.error) {
  throw result.error;
}

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});
