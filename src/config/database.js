module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'docker',
    password: 'docker',
    database: 'tasks-manager',
    define: {
        timestamps: true,
        underscored: true
    }
}