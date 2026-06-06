Let's break down these React CDN script tags word by word and understand what each part does.

Script Tag 1
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script>

The HTML <script> tag is used to load and execute JavaScript.

<script></script>

When the browser encounters this tag, it downloads and runs the JavaScript file.

crossorigin
<script crossorigin ...>

This attribute tells the browser that the file is being loaded from a different domain than your website.

Your page may be:

http://localhost:5500

But React is being loaded from:

https://unpkg.com

Since it's a different origin (domain), crossorigin helps with:

Error reporting in browser console
Security checks
Source maps
CORS (Cross-Origin Resource Sharing)

Without it, browser error messages may be less detailed.

src
src="..."

src stands for Source.

It tells the browser where to download the JavaScript file from.

Example:

<script src="app.js"></script>

Here:

src="https://unpkg.com/react@18/umd/react.development.js"

means:

Download React from this URL.

Understanding the URL
https://unpkg.com/react@18/umd/react.development.js

Let's split it.

https://

Protocol used to communicate securely over the internet.

https = HyperText Transfer Protocol Secure

The browser uses HTTPS to download the file securely.

unpkg.com

A CDN (Content Delivery Network).

unpkg.com

hosts npm packages directly on the web.

It allows you to use npm libraries without installing them.

Example:

npm install react

can instead be loaded directly from:

https://unpkg.com/react
react
/react

This is the npm package name.

React is published on npm as:

react
@18
react@18

Specifies the version.

Meaning:

Use React version 18

Examples:

react@17
react@18
react@19

If omitted:

https://unpkg.com/react

the latest version is used.

umd
/umd/

UMD stands for:

Universal Module Definition

This build works in many environments:

Browser
Node.js
AMD loaders
CommonJS

For beginners:

UMD allows React to be used directly in a browser with a <script> tag.

Without bundlers like:

Vite
Webpack
Parcel
react.development.js

This is the actual JavaScript file.

react

The React library.

development

Development version.

Contains:

Helpful warnings
Debug messages
Validation checks

Example warning:

Each child in a list should have a unique key

These warnings appear only in development builds.

Production Version

Instead of:

react.development.js

you would use:

react.production.min.js

Production build:

Smaller file size
Faster
No development warnings

Example:

<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
Script Tag 2
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
react-dom

React itself creates elements.

ReactDOM renders those elements into the browser DOM.

React

Creates:

const element = <h1>Hello</h1>;
ReactDOM

Displays it:

ReactDOM.createRoot(root).render(element);

Without ReactDOM, React components cannot appear on the page.

react-dom.development.js

Development version of ReactDOM.

Provides:

DOM rendering
Event handling
Development warnings
What Gets Added to the Browser?

After these scripts load, two global objects become available:

React
ReactDOM

You can verify in browser console:

console.log(React);
console.log(ReactDOM);
Example Flow
<div id="root"></div>

<script src="https://unpkg.com/react@18/umd/react.development.js"></script>

<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<script>
  const root = ReactDOM.createRoot(
    document.getElementById("root")
  );

  root.render(
    React.createElement("h1", null, "Hello React")
  );
</script>

Flow:

Browser
   ↓
Loads React
   ↓
Loads ReactDOM
   ↓
Creates React Element
   ↓
Renders into DOM
   ↓
Displays on screen
Quick Summary
Part	Meaning
<script>	Load JavaScript
crossorigin	Allow cross-origin loading and better error reporting
src	Source URL of JavaScript file
https://	Secure protocol
unpkg.com	CDN serving npm packages
react	React npm package
@18	React version 18
umd	Browser-compatible build
react.development.js	React development build
react-dom	Library that renders React into the DOM
react-dom.development.js	Development build of ReactDOM

For interviews, a common follow-up question is: "Why do modern React projects use Vite/Webpack instead of these CDN links?" The answer is that bundlers provide module support, optimization, hot reloading, code splitting, TypeScript support, and smaller production builds.
