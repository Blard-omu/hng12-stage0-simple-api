# Tingo AI API

Tingo AI is a high-tech AI-driven software company, providing a variety of innovative products such as **Tingo AI Radio**, **TingoGPT (text-to-speech model)**, **text-to-instrumental model**, and **Tingo AI Agents**. This API powers the core functionalities of these services.

🌐 **Website:** [Tingo AI](https://www.tingomedia.ai)

## 🚀 Key Features
- **Secure Authentication**: User registration, login, password management.
- **Music Generation**: AI-generated music and soundtracks.
- **Text-to-Speech**: Advanced speech synthesis via TingoGPT.
- **AI Radio**: Stream AI-driven radio programs.
- **Library Management**: Store and retrieve generated music files.

---

## 📌 API Endpoints

### 🔑 **Authentication Endpoints**
| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| `POST` | `/login`             | Authenticate user           |
| `POST` | `/register`          | Register a new user         |
| `POST` | `/forgot-password`   | Request password reset      |
| `POST` | `/reset-password`    | Reset user password         |
| `POST` | `/change-password`   | Change user password        |

### 🎵 **Tingo Studio Endpoints**
| Method | Endpoint               | Description                           |
|--------|------------------------|---------------------------------------|
| `POST` | `/generate-music`      | Generate AI-powered music            |
| `GET`  | `/library/:id`         | Retrieve generated music by ID       |

### 📻 **Tingo AI Radio Endpoints**
| Method | Endpoint     | Description                  |
|--------|-------------|------------------------------|
| `GET`  | `/programs` | Retrieve AI radio programs  |

---

## 🛠️ **Getting Started**
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-repo/tingo-ai-api.git
cd tingo-ai-api
```

### 2️⃣ **Install Dependencies**
```bash
yarn install  # or npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env` file and configure the necessary credentials.

### 4️⃣ **Run the Application**
```bash
yarn dev  # or npm run dev
```

---

## 📝 **Contributing**
We welcome contributions! Please check our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 **License**
This project is licensed under the MIT License.

---

💡 **For more details, visit our official website:** [Tingo AI](https://www.tingomedia.ai) 🚀

