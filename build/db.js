"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('CARTOLA_2024', 'root', '12345678', {
    dialect: 'mysql',
    host: 'localhost',
});
exports.default = sequelize;
//# sourceMappingURL=db.js.map