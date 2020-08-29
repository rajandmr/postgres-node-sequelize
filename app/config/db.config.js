module.exports = {
  HOST: "localhost", // Replace it with your own host address
  USER: "user123", // Replace with your own username
  PASSWORD: "12345", // Replace with your own password
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
