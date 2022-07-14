"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class prompt extends sequelize_1.Model {
        static associate(models) {
            // define association here
            prompt.belongsTo(models.user);
        }
    }
    prompt.init({
        prompt: { type: DataTypes.TEXT, allowNull: false },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id",
            },
            onDelete: "CASCADE",
        },
    }, {
        sequelize,
        modelName: "prompt",
    });
    return prompt;
};
