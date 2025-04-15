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
    TAG1: {
      color: '#4caf50',  
      isBold: true,      
      hasTime: true,      
      enabled: true       
    },
    TAG2: {
      color: '#ff9800', 
      isBold: false,
      hasTime: true,
      enabled: true
    },
    TAG3: {
      color: '#9c27b0',  
      isBold: true,
      hasTime: true,
      enabled: false      
    },
  },
});

// Logging examples
cl.log('User signed in', { name: 'Mike' }, [1, 2, 3], 'TAG1');
cl.info('Fetching data...', 'TAG2');
cl.warn('No UI theme selected', 'TAG3');
cl.error('Something went wrong', 'TAG2');
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
    debugTag: {
      color: 'teal',
      enabled: true,
    }
  }
});

cl.log('CJS works!', 'debugTag');
```

---

## 🖨️ Console Output Example

```
2025-04-13T22:18:51.199Z [TAG1] User signed in { name: 'Mike' } [ 1, 2, 3 ]
2025-04-13T22:18:51.219Z [TAG2] Fetching data...
2025-04-13T22:18:51.220Z [TAG3] No UI theme selected
```

## Author

- [Behzad Bakhshayesh](https://github.com/behzadbakhshayesh)