require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV || 'dev',

  database: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  },

  igl: {
    url: process.env.IGL_URL,
    token: process.env.IGL_TOKEN
  },

  limits: {
    maxUsers: 25
  }
};