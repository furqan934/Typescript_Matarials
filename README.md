# Typescript_Matarials
# 📘 TypeScript Basic to Advanced – Complete Guide

This repository contains a **complete, step-by-step learning path** for mastering **TypeScript**, starting from **basic fundamentals** to **advanced real-world concepts**.

It is perfect for:
- Beginners coming from JavaScript
- Developers transitioning to typed code
- Anyone building scalable apps with TypeScript

---

## 💻 How to Setup This Repo in VS Code

### Step 1: Clone the Repository

```bash
git clone https://github.com/furqan934/typescriptbasic-to-advance.git
cd typescriptbasic-to-advance
```
Step 2: Open in VS Code
Make sure you have VS Code and Node.js installed.

Step 3: Install Dependencies
```bash

npm install
```
Step 4: Build and Run
``` bash
npm run build   # Compile TypeScript
npm run start   # Run the app (compiled JS)
```
Or use:
```bash
npx tsc
node dist/index.js
  ```
 **Folder Structure**
typescriptbasic-to-advance/
│   ├── 01_basics/
│   ├── 02_array/
│   ├── 03_object/
│   ├── 04_enum/
│   ├── 05_generics/
│   ├── 06_alias&interface/
│   ├── 07_union&intersection/
├── dist/           → Compiled JS output (ignored by Git)
├── tsconfig.json   → TypeScript configuration
└── README.md       → You are here!

🚀 What You'll Learn (Topics Covered)
✅ Basic
What is TypeScript?

Setting up a TypeScript project

TypeScript vs JavaScript

Basic Types (number, string, boolean, array, tuple, enum, any, void, never)

✅ Intermediate
Type inference

Union & Intersection Types

Type Aliases vs Interfaces

Functions (optional, default, rest parameters)

Classes and Objects

Access Modifiers (public, private, protected)

Inheritance and Polymorphism

✅ Advanced
Generics

Type Guards

Discriminated Unions

Type Assertion & Casting

Utility Types (Partial, Readonly, Pick, Omit, etc.)

Modules and Namespaces

Decorators

Working with third-party JS libraries using .d.ts

Configuration of tsconfig.json

📦 Scripts (from package.json)
```bash
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "tsc --watch"
}
```
⚙️ Prerequisites
Node.js and npm (Install from https://nodejs.org)

TypeScript globally or locally:
```bash
npm install -g typescript
```
VS Code with TypeScript support and extensions like:

ESLint

Prettier

TypeScript Hero (optional)
📄 .gitignore (Already Setup)
```bash
node_modules/
dist/
.env
```
🙌 Contribution
Pull requests are welcome. If you find an issue or want to add more examples (e.g., design patterns in TS), feel free to contribute.

👨‍💻 Author
Muhammad Furqan
GitHub: furqan934

📃 License
This reposirtey is licensed under the MIT License.


---
