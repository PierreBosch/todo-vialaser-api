
module.exports = {
    dialect: 'postgres',
    url: 'postgres://ugtpnrtuhkfcer:66c51cf257f3ca5a773738920a37decbddff2f55ac9799718bf2f91ff4f3e35f@ec2-52-7-115-250.compute-1.amazonaws.com:5432/dcge13l5pun5dv',
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

