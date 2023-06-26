
# ** Chapter-1 Inception Assignment **

### 1. What is Emmet?

Emmet is a plugin and abbreviation syntax used in various code editors to help speed up and streamline the process of writing HTML and CSS code. It allows you to write shorthand abbreviations and expand them into complete HTML or CSS code snippets.

### 2. Difference between a Library and Framework?

Library:
A library is a collection of prewritten code or modules that provide specific functionalities, features, or utility functions. It typically focuses on solving specific tasks or providing specific functionality.

Framework:
A framework, on the other hand, is a more comprehensive and structured software development environment that provides a foundation and a set of rules, conventions, and tools to streamline the development process. Frameworks offer a complete solution for building applications and provide a structure for organizing code, defining architectural patterns, and handling common tasks such as routing, state management, and database interactions. 

### 3. What is CDN? Why do we use it?

CDN stands for Content Delivery Network. It is a distributed network of servers located in different geographical locations around the world. The main purpose of a CDN is to deliver web content, such as HTML, CSS, JavaScript files, images, videos, and other media, to users with high performance and reliability.

CDN are used for: Improved Content Delivery Speed, Reducing Bandwidth Costs, Improved User Experience.


### 4. Why is React known as React?

The name "React" represents the core principles of the library, including its reactive nature, efficient updates, and component reusability.
React was initially developed by Facebook and was first released in 2013. It was created to address the challenges of building complex user interfaces that need to be fast, scalable, and maintainable.


### 5. What is crossorigin in script tag?

The crossorigin attribute in the script tag is used to specify how the browser should handle cross-origin requests when fetching JavaScript files.

Cross-origin requests occur when a web page tries to retrieve a resource (such as a script file) from a different domain, protocol, or port than the one it originated from. By default, browsers enforce a same-origin policy, which means that these types of requests are blocked for security reasons.


### 6. What is difference between React and ReactDOM?

React is the core library that encompasses the fundamental concepts and functionalities of building UI components, while ReactDOM is a specific package that deals with rendering React components into the browser's DOM.

### 7. What is difference between react.development.js and react.production.js files via CDN?

The difference between the "react.development.js" and "react.production.js" files via a CDN lies in the optimizations applied to each version, targeting different stages of the software development lifecycle:

react.development.js:
The "react.development.js" file is intended for development purposes. It provides a non-minified and unoptimized version of the React library, which includes additional warning messages and helpful development tools. This version is larger in size, making it easier to read and understand the codebase. 

The "react.production.js" file is optimized for production use. It is a minified and highly optimized version of the React library, designed to be lightweight and performant. The code is compressed and stripped of any unnecessary characters, making the file size smaller and reducing the bandwidth required for transmission. 


### 8. What is async and defer?

The "async" and "defer" attributes are used in HTML script tags to control how external JavaScript files are loaded and executed within a web page:

"async" allows the script to be loaded and executed asynchronously, without blocking rendering. It can execute as soon as it finishes downloading, even if HTML parsing is not complete.

"defer" allows the script to be loaded asynchronously as well, but it will only execute after HTML parsing is complete and before the "DOMContentLoaded" event fires. It maintains the order of execution as per the appearance in the HTML document.

Both "async" and "defer" can be beneficial for improving the performance and loading behavior of external scripts, but their specific usage depends on the requirements and dependencies of the scripts in your web page.






