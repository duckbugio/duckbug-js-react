# @duckbug/js-react

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The official JavaScript SDK for [DuckBug.io](https://duckbug.io) - a flexible logging and error tracking platform.

## Installation

```bash
# npm
npm install duckbug-react

# yarn
yarn add duckbug-react

# pnpm
pnpm add duckbug-react
```
## Quick Start

### Basic Usage

```typescript
import { DuckBugWrapper } from '@duckbug/react'; 

// Paste your dsn from DuckBug
const dsn = 'your-duckbug-dsn-here'

// Create SDK instance with optional configuration
// You can configure the configuration as you want.
// If you don't pass a configuration prop, the default configuration will be used
const config = {    
logReports: {
        log: false,
        warn: true,
        error: true,
    }
};
  
// Start logging
<DuckBugWrapper dsn={dsn} config={config}>
    <YourApp />
</DuckBugWrapper>

// This is all you need to catch and log errors
```
#### Methods

You can also catch errors them yourself and log them

```typescript
import { useDuckBug } from '@duckbug/react';

//Get your DuckSDK
const duck = useDuckBug()

<button onClick={() => {
    try {
        //Some code...
    } catch (err) {
        duck.error(err) // Example of using duck methods
    }
}}>
  SendMessage
</button>

// Logging methods
duck.log('Info message', { userId: 123, action: 'user_login' });
duck.debug('Debug message', { debugInfo: 'Connection established' });
duck.warn('Warning message', { warning: 'Rate limit approaching' });
duck.error('Error message', { error: 'Database connection failed' });
duck.fatal('Fatal message', { error: 'Ay, caramba' });
```

## Browser Compatibility

This SDK works in all modern browsers that support:
- ES2015+ (ES6)
- Fetch API
- JSON API

For older browsers, you may need to include polyfills.

## License

MIT © [DuckBug.io](https://duckbug.io)

## Support

- 🐛 Issues: [GitHub Issues](https://github.com/duckbugio/duckbug-js-react/issues)

---

**Made with 🦆 by the DuckBug.io team**
