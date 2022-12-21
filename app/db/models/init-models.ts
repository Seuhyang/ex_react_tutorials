import { DataTypes } from 'sequelize';
import _code from './code';

//@ts-ignore
function initModels(sequelize) {
    const code = _code(sequelize, DataTypes);
    return {
        code,
    };
}
const _initModels = initModels;
export { _initModels as initModels };
export default initModels;
