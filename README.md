## React CDN Usage

This project uses React and ReactDOM through CDN links from UNPKG instead of installing them via npm.

### React CDN

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

Explanation
CDN (Content Delivery Network) - CDN is a network of servers distributed across different geographic locations that store and deliver files such as JavaScript, CSS, images, videos, and fonts to users from the server closest to them. The browser downloads React directly from the CDN.
script: Loads and executes external JavaScript files.
crossorigin: Enables cross-origin resource sharing and provides better error reporting for files loaded from external domains.
unpkg.com: A CDN that serves npm packages directly in the browser.
react@18: Loads React version 18.
react-dom@18: Loads ReactDOM version 18, which is responsible for rendering React components to the browser DOM.
umd: Universal Module Definition build, allowing React to run directly in browsers without a bundler.
development.js: Development build containing helpful warnings and debugging information.
Global Objects Available

After loading these scripts, the following objects are available globally:

React
ReactDOM
Purpose

Using CDN links is useful for:

Learning React fundamentals
Small demo applications
Quick prototyping
Running React without npm, Vite, or Webpack

For production applications, it is recommended to use modern build tools such as Vite, which provide better performance, module support, optimization, and development experience.
