"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const models_1 = __importDefault(require("../src/db/models"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// import Routers
const openaiRoute_1 = __importDefault(require("./Routers/openaiRoute"));
const userRoute_1 = __importDefault(require("./Routers/userRoute"));
// Middlewares
app.use((0, cookie_session_1.default)({
    name: "session",
    keys: ["key1", "key2", "key3"],
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use("/api/openai", (0, openaiRoute_1.default)(models_1.default));
app.use("/user", (0, userRoute_1.default)(models_1.default));
app.use(express_1.default.static("./src/audio"));
app.listen(8080, () => {
    console.log("backend listening on port 8080");
});