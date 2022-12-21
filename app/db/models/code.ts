import Sequelize from 'sequelize';

// @ts-ignore
export default function (sequelize, DataTypes) {
    return sequelize.define(
        'code',
        {
            code_idx: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            group: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            code: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            code_value: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            description: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            sort: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: Sequelize.literal('0'),
            },
            create_date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        },
        {
            sequelize,
            tableName: 'code',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'code_idx' }],
                },
            ],
        },
    );
}
