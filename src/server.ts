import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import methodNotAllowed from "./middlewares/methodNotAllowed";
import AppError from "./helper/AppError"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// ✅ Example API Route (Only GET Allowed)
app.route("/api/v1")
  .get((req, res) => {
    res.json({
      email_address: process.env.EMAIL,
      current_datetime: new Date().toISOString(),
      github_url: process.env.GITHUB_URL,
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