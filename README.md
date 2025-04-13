
# 📦 cl

A lightweight and customizable console logger for the browser.  
Supports environments, colored tags, filtering, and multiple log levels.

---

## 🚀 Installation

```bash
npm install cl
```

or

```bash
yarn add cl
```

---

## 📌 Features

- ✅ Enable/disable globally
- 🎯 Filter logs by tag
- 🎨 Custom colors per tag
- 📦 ESM + CJS support
- ⚙️ TypeScript types included

---

## 🧠 Usage

```ts
import cl from 'clean-logify';

// Configure once (e.g. in your app entry)
cl.config({
  enabled: true,
  tags: ['auth', 'api', 'ui'],
  colors: {
    auth: '#4caf50', // green
    api: '#ff9800',  // orange
    ui: '#9c27b0'    // purple
  }
});

// Logging
cl.log('User signed in', 'auth');
cl.info('Fetching data...', 'api');
cl.warn('No UI theme selected', 'ui');
cl.error('Something went wrong', 'api');
```

---

## 📁 Config Options

| Option    | Type                    | Description                          |
|-----------|-------------------------|--------------------------------------|
| `enabled` | `boolean`               | Enable/disable all logging           |
| `tags`    | `string[]`              | Allowed tags for logging             |
| `colors`  | `Record<string,string>` | Custom colors per tag in hex format  |

---

## 🔧 Example in CommonJS

```js
const cl = require('clean-logify');

cl.config({
  enabled: true,
  tags: ['debug'],
  colors: { debug: 'teal' }
});

cl.log('CJS works!', 'debug');
```

---

## 📤 Output Example (in console)

```bash
[AUTH] User signed in
[API] Fetching data...
[UI] No UI theme selected
```

---


## Author

- [Behzad Bakhshayesh](https://github.com/behzadbakhshayesh)
