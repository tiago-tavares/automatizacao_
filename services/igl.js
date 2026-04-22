const axios = require('axios');
const config = require('../config');

async function sendUserToIGL(user) {
  try {
    const payload = {
      name: user.nome,
      username: user.login,
      email: user.email
    };

    await axios.post(
      `${config.igl.url}/users`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${config.igl.token}`
        }
      }
    );

    console.log(`Enviado: ${user.nome}`);

  } catch (error) {
    console.error(`Erro ao enviar ${user.nome}`, error.message);
    throw error;
  }
}

module.exports = { sendUserToIGL };