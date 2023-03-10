"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.apiRouter = router;
router.get('/'), (req, res, next) => res.send('Get request');
router.post('/'), (req, res, next) => res.send('Post request');
router.put('/'), (req, res, next) => res.send('Put request');
router.delete('/'), (req, res, next) => res.send('Delete request');
