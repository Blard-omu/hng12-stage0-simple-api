import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./server/middlewares/errorHandler";
import methodNotAllowed from "./server/middlewares/methodNotAllowed";
import AppError from "./utils/helper/AppError";
import { CONFIG } from "./conf";
dotenv.config();

const app = express();
const PORT = CONFIG.APPLICATION.PORT;

app.use(express.json());
app.use(cors());


// ✅ Example API Route (Only GET Allowed)
app.route("/api/v1")
  .get((req, res) => {
    res.json({
      message: CONFIG.WELCOME.MESSAGE,
      current_datetime: new Date().toISOString(),
      doc_link: CONFIG.WELCOME.SWAGGER_DOC,
    });
  })
  .all(methodNotAllowed); // ❌ Rejects other methods (POST, PUT, DELETE, etc.)

// ❌ Force an error for testing
app.get("/api/v1/error", (req, res, next) => {
  next(new AppError("This is a test error!", 500));
});

// ✅ 404 - Not Found Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

// ✅ Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/v1`);
});


export default app;