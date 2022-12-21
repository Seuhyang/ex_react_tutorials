import { Dialect } from 'sequelize/types';

type configType = {
    db: DbType;
};

type DbType = {
    user: string;
    host: string;
    password: string;
    port: number;
    database: string;
    dialect: Dialect;
};

const config: configType = {
    db: {
        user: 'root',
        host: 'localhost',
        password: 'admin',
        port: 3306,
        database: 'common',
        dialect: 'mysql',
    },
};

export default config;
