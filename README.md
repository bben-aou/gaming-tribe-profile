# 🎮 Gaming Tribe Test

A full-stack application for IT testing with authentication features including local and GitHub authentication strategies.

## 🚀 Tech Stack

#### Frontend
* React
* Tailwind CSS
* React Query
* React Hook Form
* Zod (form validation)

#### Backend
* Express.js
* MongoDB
* Prisma ORM

## ✨ Features

* User authentication (local and GitHub)
* Token refresh mechanism for enhanced user experience
* Form validation
* Secure routing
* Profile management

## 📋 Pages

#### 1. Home Page
* Navigation buttons for:
  * Create Account
  * Login
  * GitHub Login

#### 2. Login Page
* User authentication
* Token management
* Redirect to profile upon successful login

#### 3. Sign Up Page
* User registration
* Form validation
* Account creation

## 🛠️ Installation & Setup

#### Prerequisites
* Node.js
* npm
* MongoDB
* Git

#### Frontend Setup

1. Clone the repository
```bash
git clone https://github.com/bben-aou/gaming-tribe-profile
```

2. Navigate to client directory
```bash
cd client
```

3. Create `.env` file in the client root directory and add necessary environment variables

4. Install dependencies
```bash
npm install
```

5. Start development server
```bash
npm run dev
```

#### Backend Setup

1. Navigate to server directory
```bash
cd server
```

2. Create `.env` file in the server root directory and add necessary environment variables

3. Install dependencies
```bash
npm install
```

4. Start server
```bash
npm run dev
```


## 🔒 Authentication

The application implements two authentication strategies:
1. Local authentication with email and password
2. GitHub OAuth integration

A refresh token mechanism is implemented to maintain user sessions and enhance the user experience.

## 👥 User Flow

1. User lands on home page
2. Can choose to:
   * Create new account
   * Login with existing credentials
   * Authenticate via GitHub
3. Upon successful authentication, user is redirected to their profile


## 👨‍💻 Author

[Bilal Ben Aouad]
