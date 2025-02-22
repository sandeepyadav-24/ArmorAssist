"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = __importDefault(require("./routes/auth"));
const todo_1 = __importDefault(require("./routes/todo"));
const generate_1 = __importDefault(require("./routes/generate"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/auth", auth_1.default);
app.use("/todo", todo_1.default);
app.use("/generate", generate_1.default);
app.listen(port, () => {
    console.log(`Post is listening at Port : ${port}`);
});
mongoose_1.default.connect(process.env.MONGO_URL ||
    "mongodb+srv://sandeepyadav24:sandyDon%40123@cluster0.d7vrvhj.mongodb.net/");
