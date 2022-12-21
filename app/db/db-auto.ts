import { SequelizeAuto } from 'sequelize-auto';
import config from '@test/config';
import path from 'path';
import { fileURLToPath } from 'url';

const db = config.db;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const autoOptions = {
    host: db.host,
    database: db.database,
    username: db.user,
    port: db.port,
    dialect: db.dialect,
    directory: `${__dirname}/models`,
    caseModel: 'c',
};

// @ts-ignore
const dbAuto = new SequelizeAuto(db.database, db.user, db.password, autoOptions);

const result = dbAuto.run();
dbAuto
    .run()
    .then((info) => {
        console.log(info.tables);
        console.log(info.indexes);
    })
    .catch((err) => console.error(err));
