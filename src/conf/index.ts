import dotenv from "dotenv";

dotenv.config();


const CONFIG: Config = Object.freeze({
  WELCOME: {
    MESSAGE: "Welcome to Tingo AI API",
    PORT: Number(process.env.APPLICATION_PORT) || 3000,
    SWAGGER_DOC: process.env.SWAGGER_URL || "",
  },

  APPLICATION: {
    PORT: Number(process.env.APPLICATION_PORT) || 8080,
    ENVIRONMENT: process.env.APPLICATION_ENVIRONMENT || "development",
    JWT_SECRET: process.env.APPLICATION_JWT_SECRET || "secret",
    ACCESS_TOKEN_EXPIRES_IN: process.env.APPLICATION_ACCESS_TOKEN_EXPIRES_IN || "1h",
    REFRESH_TOKEN_EXPIRES_IN: process.env.APPLICATION_REFRESH_TOKEN_EXPIRES_IN || "7d",
    RESET_TOKEN_EXPIRES_IN: process.env.APPLICATION_RESET_TOKEN_EXPIRES_IN || "1h",
    OTP_EXPIRES_IN: process.env.APPLICATION_OTP_EXPIRES_IN || "5m",
    IS_WORKER: process.env.APPLICATION_IS_WORKER?.toLowerCase() === "true",
    FRONTEND_URL: process.env.APPLICATION_FRONTEND_URL || "",
    DOMAIN: process.env.APPLICATION_DOMAIN || "",
    RULE_ENGINE_URL: process.env.APPLICATION_RULE_ENGINE_URL || "",
  },

  POSTGRES: {
    HOST: process.env.POSTGRES_HOST || "localhost",
    PORT: Number(process.env.POSTGRES_PORT) || 5432,
    DB: process.env.POSTGRES_DB || "postgres",
    USERNAME: process.env.POSTGRES_USER || "user",
    PASSWORD: process.env.POSTGRES_PASSWORD || "password",
  },

  AWS: {
    REGION: process.env.AWS_REGION || "us-east-1",
    ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || "",
    SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || "",
    BUCKET: process.env.AWS_BUCKET || "",
    SES_EMAIL: process.env.AWS_SES_EMAIL || "",
  },

  MAIL: {
    DOMAIN: process.env.MAIL_DOMAIN_NAME || "",
    KEY: process.env.MAIL_API_KEY || "",
    USERNAME: process.env.MAIL_API_USERNAME || "",
    FROM: process.env.MAIL_FROM || "",
    FROM_NAME: process.env.MAIL_FROM_NAME || "",
    INQUIRY_DESTINATION: process.env.MAIL_INQUIRY_DESTINATION || "",
  },
});

export { CONFIG };
