# 📦 clean-logify

A lightweight and customizable console logger for the browser.  
Supports environments, colored tags, filtering, and multiple log levels.

---

## 🚀 Installation

```bash
npm install clean-logify
```

or

```bash
yarn add clean-logify
```

---

## 📌 Features

- ✅ Enable/disable globally
- 🎯 Per-tag settings (enable, color, time, bold)
- ⏰ Timestamp
- 📦 ESM + CJS support
- ⚙️ Written in TypeScript

---

## 🧠 Usage

```ts
import cl from 'clean-logify';

// Configuration
cl.config({
  enabledAll: true, // Optional: you can use process.env.NODE_ENV === 'development' for dynamic environments

  tags: {
    auth: {
      color: '#4caf50',  
      isBold: true,      
      hasTime: true,      
      enabled: true       
    },
    api: {
      color: '#ff9800', 
      isBold: false,
      hasTime: true,
      enabled: true
    },
    ui: {
      color: '#9c27b0',  
      isBold: true,
      hasTime: true,
      enabled: false      
    },
  },
});

// Logging examples
cl.log('User signed in', { name: 'Mike' }, [1, 2, 3], 'auth');
cl.info('Fetching data...', 'api');
cl.warn('No UI theme selected', 'ui');
cl.error('Something went wrong', 'api');
```

---

## 🛠️ Config Options

```ts
interface cleanlogifyConfig {
  enabledAll?: boolean; // default: true
  tags?: Record<string, {
    color?: string;      // default: '#03a9f4'
    isBold?: boolean;    // default: true
    hasTime?: boolean;   // default: true
    enabled?: boolean;   // default: true
  }>
}
```

| Option       | Type                        | Description                            |
|--------------|-----------------------------|----------------------------------------|
| `enabledAll` | `boolean`                   | Enable/disable logging globally        |
| `tags`       | `Record<string, TagConfig>` | Configure each tag (color, bold, etc.) |

---

## 🔧 CommonJS Example

```js
const cl = require('clean-logify');

cl.config({
  enabledAll: true,
  tags: {
    debug: {
      color: 'teal',
      enabled: true,
    }
  }
});

cl.log('CJS works!', 'debug');
```

---

## 🖨️ Console Output Example

```
2025-04-13T22:18:51.199Z [AUTH] User signed in { name: 'Mike' } [ 1, 2, 3 ]
2025-04-13T22:18:51.219Z [API] Fetching data...
2025-04-13T22:18:51.220Z [UI] No UI theme selected
```

## Author

- [Behzad Bakhshayesh](https://github.com/behzadbakhshayesh)