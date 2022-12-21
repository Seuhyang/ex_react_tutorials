import Sequelize from 'sequelize';
import initModels from './models/init-models.js';
import config from '@test/config';

const { Op } = Sequelize;
const { host, user, password, database, dialect, port } = config.db;

const sequelize = new Sequelize.Sequelize(database, user, password, {
    host,
    dialect,
    define: {
        timestamps: false,
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    logging: console.log,
    logQueryParameters: true,
});

const models = initModels(sequelize);

const dbOp = {
    ...models,
    Sequelize,
    sequelize,
    Op,
};

// export { sequelize };
// export { Sequelize };
// export { Op };
export default dbOp;
