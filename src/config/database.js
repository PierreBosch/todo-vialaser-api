
module.exports = {
    dialect: 'postgres',
    url: 'postgres://pxbvalel:mB7a6gC3UpP7DXei2kz0b7Dt8mYP6EGZ@ziggy.db.elephantsql.com:5432/pxbvalel',
    dialectOptions: {
        rejectUnauthorized: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: true,
      underscored: true,
    },
  };

