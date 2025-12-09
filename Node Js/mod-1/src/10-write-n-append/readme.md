# Node.js FS Module — README

## Overview

This document explains how to use the Node.js **fs** (File System) module, with a focus on the **flag** property used in `fs.writeFile`, and general file handling.

---

## 📁 FS Module Basics

The `fs` module allows Node.js to interact with the file system.

```js
const fs = require("fs");
```

You can perform operations like reading, writing, updating, deleting, and checking files.

---

## ✍️ Writing Files

### Overwrite (Default)

```js
fs.writeFile("example.txt", "Hello World", (err) => {
  if (err) throw err;
});
```

Default flag: **w**

---

## 🚩 FS Flags Explained

The **flag** option controls _how_ the file is opened.

| Flag   | Meaning          | Behavior                       |
| ------ | ---------------- | ------------------------------ |
| **w**  | Write            | Overwrites file or creates new |
| **a**  | Append           | Adds content to end of file    |
| **wx** | Write Exclusive  | Creates new; errors if exists  |
| **ax** | Append Exclusive | Appends; errors if exists      |
| **r**  | Read Only        | Errors if file not found       |
| **r+** | Read + Write     | Errors if file not found       |
| **w+** | Read + Write     | Overwrites existing            |
| **a+** | Read + Append    | Creates if missing             |

---

## ✨ Examples

### Append Data

```js
fs.writeFile("log.txt", "New line\n", { flag: "a" }, (err) => {
  if (err) throw err;
});
```

### Write Only If File Doesn't Exist

```js
fs.writeFile("unique.txt", "Secret", { flag: "wx" }, (err) => {
  if (err) console.log("File already exists.");
});
```

---

## 📘 Reading Files

```js
fs.readFile("msg.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

## 📌 Helpful Tips

- Use **absolute paths** (via `__dirname`) to avoid missing file errors.
- Use `fs.mkdir()` before writing to folder paths.
- Always handle errors in file operations.

---

## 📄 Path Example

```js
const path = require("path");
const filePath = path.join(__dirname, "../../src/fs-module/msg.txt");
```

**Meaning:** Builds a safe cross-platform path to `msg.txt`.

---

## License

MIT
