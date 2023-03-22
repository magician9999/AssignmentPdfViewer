# Installation and run guide for PDF Viewer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory
I have used 

### `npm start`

Runs the app in the development mode.\
1) I have used here React PDF Viewer Library which is powered by React hooks completely. So it requires React 16.8 or later.
### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

React PDF Viewer uses the APIs provided by the popular pdfjs library. Execute the following command from the root folder to install pdfjs:

### `npm install pdfjs-dist@3.4.120`

2) Installing the core package
### `npm install @react-pdf-viewer/core@3.12.0`


4> Setting up the worker
pdfjs uses a web worker to process the most tasks which take time such as parsing and rendering a PDF document. 
The web worker is loaded via the `workerUrl` parameter:

### `import { Worker } from '@react-pdf-viewer/core';`

5> I have tried to use i18next which is internationalization for language change 

### `npm install i18next --save`




