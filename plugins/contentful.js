const contentful = require("contentful");

const dbInstance = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
});

export default ({ app }, inject) => {
  inject("db", dbInstance);
};

