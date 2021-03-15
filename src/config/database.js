
module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: false
    },
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    define: {
      timestamps: true,
      underscored: true,
    },
  };