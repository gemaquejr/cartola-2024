"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = __importDefault(require("./db"));
const teamRoute_1 = __importDefault(require("./routes/teamRoute"));
const playerRoute_1 = __importDefault(require("./routes/playerRoute"));
const PORT = 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_req, res) => res.status(200).json({ message: 'API funcionando!' }));
app.use('/teams', teamRoute_1.default);
app.use('/players', playerRoute_1.default);
db_1.default.sync().then(() => {
    console.log('Banco de dados conectado');
}).catch((error) => {
    console.error('Erro ao conectar o banco de dados:', error);
});
app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map