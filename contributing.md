# Contributing to the Project

Thank you for contributing to this project! This guide provides instructions for troubleshooting port conflicts, running the application, and understanding the project's dependencies.

## Check if Port 8000 is in Use
Before running the application, ensure that **port 8000** is not already occupied by another process.

```shell
netstat -ano | findstr :8000  # Windows
lsof -i :8000  # macOS/Linux
```

### Example Output:
```shell
  TCP    0.0.0.0:8000           0.0.0.0:0              LISTENING       5440
  TCP    0.0.0.0:8000           0.0.0.0:0              LISTENING       14480
  TCP    [::]:8000              [::]:0                 LISTENING       5440
  TCP    [::]:8000              [::]:0                 LISTENING       14480
```
- You have two processes (PIDs: **5440** and **14480**) using port 8000, which prevents your server from starting.

## Identify the Processes Using Port 8000
Run the following command to determine which applications are using **port 8000**:

```shell
tasklist | findstr 5440  # Windows
tasklist | findstr 14480

# Or on macOS/Linux:
ps -aux | grep 5440
ps -aux | grep 14480
```

In my case, the conflicting processes were **PostgreSQL** and a **Node.js proxy server**.

## Kill the Processes Using Port 8000
Terminate the processes occupying port 8000:

```shell
taskkill /PID 5440 /F  # Windows
taskkill /PID 14480 /F

# Or on macOS/Linux:
kill -9 5440
kill -9 14480
```

## Run Your Application
Once the conflicting processes are stopped, you can now start your application on **port 8000**:

```bash
yarn dev  # or npm run dev
```

## Yarn Commands
Below are useful **Yarn** commands for managing the application:

- **Run the application**:
```bash
yarn dev  # npm run dev
```

- **Install a new package**:
```bash
yarn add <package>  # npm install <package>
```

- **Install all dependencies from `yarn.lock`**:
```bash
yarn install  # npm install
```

## TypeScript Configuration (`tsconfig.json`)
This project uses the following TypeScript settings:

| Option | Description |
|--------|-------------|
| `module: "NodeNext"` | Enables ECMAScript module support for Node.js. |
| `moduleResolution: "NodeNext"` | Ensures correct resolution of ES module imports. |
| `esModuleInterop: true` | Improves compatibility between CommonJS and ES modules. |
| `allowSyntheticDefaultImports: true` | Allows default imports for modules that may not have a default export. |
| `target: "ESNext"` | Uses the latest JavaScript features. |
| `strict: true` | Enables strict type-checking rules. |
| `pretty: true` | Formats TypeScript errors for better readability. |
| `importHelpers: true` | Reduces duplicate helper functions using `tslib`. |
| `noImplicitAny: false` | Allows implicit `any` types (set to `true` for better type safety). |
| `strictNullChecks: false` | Disables strict checking for `null` and `undefined` (set to `true` for better safety). |
| `noImplicitThis: true` | Ensures `this` is properly typed. |
| `alwaysStrict: true` | Enforces `"use strict"` in every file. |
| `noUnusedLocals: true` | Prevents unused local variables. |
| `noUnusedParameters: false` | Allows unused function parameters (set to `true` for cleaner code). |
| `noImplicitReturns: true` | Ensures functions explicitly return a value. |
| `noFallthroughCasesInSwitch: true` | Prevents missing `break` statements in `switch` cases. |
| `rootDir: "./src"` | Specifies the root directory for TypeScript files. |
| `outDir: "./dist"` | Specifies the output directory for compiled JavaScript files. |
| `lib: ["esnext", "dom"]` | Includes modern JavaScript and browser APIs. |
| `skipLibCheck: true` | Skips type-checking third-party libraries for faster builds. |
| `forceConsistentCasingInFileNames: true` | Prevents case-sensitive file import issues. |
| `resolveJsonModule: true` | Allows importing JSON files. |
| `baseUrl: "./src"` | Enables absolute imports from `src/`. |
| `types: ["./src/utils/types.d.ts"]` | Specifies custom TypeScript type definitions. |

---

## Project Dependencies & Their Usage
Here’s a list of the dependencies used in this project along with their purpose:

### **Core Dependencies**
| Dependency         | Purpose |
|-------------------|---------|
| **express**      | Web framework for building API routes and handling HTTP requests. |
| **cors**         | Enables Cross-Origin Resource Sharing (CORS) for APIs. |
| **dotenv**       | Loads environment variables from a `.env` file. |
| **winston**      | Logging library for structured logs with different levels (info, debug, error, etc.). |

### **TypeScript & Development Tools**
| Dependency         | Purpose |
|-------------------|---------|
| **typescript**   | TypeScript compiler for static type checking. |
| **ts-node**      | Allows running TypeScript files directly without compiling. |
| **nodemon**      | Automatically restarts the server on file changes (hot reloading). |
| **@types/node**  | TypeScript definitions for Node.js. |
| **@types/express** | TypeScript definitions for Express. |
| **tslib**        | TypeScript runtime helpers to reduce code duplication. |

### **Database & Configuration**
| Dependency         | Purpose |
|-------------------|---------|
| **pg**           | PostgreSQL client for Node.js. |
| **@types/pg**    | TypeScript definitions for PostgreSQL client. |

### **Testing & Linting**
| Dependency         | Purpose |
|-------------------|---------|
| **jest**         | JavaScript testing framework. |
| **ts-jest**      | Allows Jest to work with TypeScript files. |
| **eslint**       | Linter for enforcing coding best practices. |
| **prettier**     | Code formatter for consistent styling. |

---

## 💡 Contribution Guidelines
- Follow the existing **code style** (run `eslint --fix` before pushing changes).
- Always **write tests** for new features (`yarn test`).
- Submit **descriptive pull requests** with details about your changes.

Thanks for contributing! 🚀

