export {};

declare global {
  // 🔹 HNG Configuration
  interface WelcomeConfig {
    MESSAGE: string;
    PORT: number;
    SWAGGER_DOC: string;
  }

  // 🔹 Application Configuration
  interface ApplicationConfig {
    PORT: number;
    ENVIRONMENT: string;
    JWT_SECRET: string;
    ACCESS_TOKEN_EXPIRES_IN: string;
    REFRESH_TOKEN_EXPIRES_IN: string;
    RESET_TOKEN_EXPIRES_IN: string;
    OTP_EXPIRES_IN: string;
    IS_WORKER: boolean;
    FRONTEND_URL: string;
    DOMAIN: string;
    RULE_ENGINE_URL: string;
  }

  // 🔹 PostgreSQL Configuration
  interface PostgresConfig {
    HOST: string;
    PORT: number;
    DB: string;
    USERNAME: string;
    PASSWORD: string;
  }

  // 🔹 AWS Configuration
  interface AwsConfig {
    REGION: string;
    ACCESS_KEY_ID: string;
    SECRET_ACCESS_KEY: string;
    BUCKET: string;
    SES_EMAIL: string;
  }

  // 🔹 Mail Configuration
  interface MailConfig {
    DOMAIN: string;
    KEY: string;
    USERNAME: string;
    FROM: string;
    FROM_NAME: string;
    INQUIRY_DESTINATION: string;
  }

  // 🔹 Full Config Structure
  interface Config {
    WELCOME: WelcomeConfig;
    APPLICATION: ApplicationConfig;
    POSTGRES: PostgresConfig;
    AWS: AwsConfig;
    MAIL: MailConfig;
  }
}
