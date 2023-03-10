"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const api_1 = require("./routes/api");
const app = (0, express_1.default)();
//parse json data
app.use(express_1.default.json());
//parse form data
app.use(express_1.default.urlencoded({ extended: true }));
//serve endpoints
app.use('/api', api_1.apiRouter);
app.use('*', (req, res) => res.send('End of the line!'));
//global error handler
app.use((err, req, res, next) => res.send('This is the global error handler.')); //
const port = 3000;
app.listen(port, () => console.log(`The server is listening on port ${port}`));
