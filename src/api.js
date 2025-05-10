const axios = require("axios");
const { loginUrl, queryUrl, credentials } = require("./config");

let token = null;

async function authenticate() {
  const response = await axios.post(loginUrl, credentials, {
    headers: { "Content-Type": "application/json" }
  });
  token = response.data.token;
  return token;
}

async function runQuery(email) {
  if (!token) await authenticate();
  const query = `
    SELECT * FROM desafio.cadastro_baterias_desafio 
    WHERE email = '${email}'
  `.trim();

  const response = await axios.post(
    queryUrl,
    { query, db: "desafio" },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data;
}

module.exports = { authenticate, runQuery };
