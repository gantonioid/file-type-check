# File Validator (TypeScript)

A simple Node.js + TypeScript script for validating file uploads locally by analyzing their **actual bytes** (magic numbers) instead of relying only on extensions or client-reported MIME types.

This project uses the [`file-type`](https://www.npmjs.com/package/file-type) package to detect real file types and restrict uploads to a safe whitelist (e.g., images or PDFs).

---

## 🚀 Features

- Detects file type from **binary data** (magic numbers).
- Prevents spoofed extensions or MIME types.
- Allows validation against a configurable whitelist.
- Simple CLI usage with TypeScript.

---

## 📦 Setup

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd file-validator
npm install
```

## Usage
```bash
npx ts-node validate-file.ts <path-to-file>
```

### Output
```bash
🔍 Detected type: image/jpeg (ext: jpg)
✅ File allowed: ./test.jpg
```

### Configuration
```bash
const allowedTypes: string[] = ["image/jpeg", "image/png", "application/pdf"];
```