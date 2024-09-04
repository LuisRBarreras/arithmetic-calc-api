module.exports = {
  local: {
    username: process.env.LOCAL_USERNAME_DB,
    password: process.env.LOCAL_PASSWORD_DB,
    database: 'db',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  development: {
    username: process.env.DEV_USERNAME_DB,
    password: process.env.DEV_PASSWORD_DB,
    database: 'arithmetic_db',
    host: process.env.DEV_HOST_DB,
    dialect: 'mysql'
  }
}
