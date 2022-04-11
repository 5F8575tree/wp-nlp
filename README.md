# 1. Webpack 5 Natural Language Processing Web App

## 1.1. Summary

Very simple web app that allows a user to type in a website URL and receive a summary of the article's 'sentiment' (confidence, irony, agreement) via access to the MeaningCloud API.


## 1.2. Table of Contents
- [1. Webpack 5 Natural Language Processing Web App](#1-webpack-5-natural-language-processing-web-app)
  - [1.1. Summary](#11-summary)
  - [1.2. Table of Contents](#12-table-of-contents)
  - [1.3. Introduction](#13-introduction)
  - [1.4. Installation](#14-installation)
  - [1.5. Links](#15-links)
  - [1.6. Dependencies](#16-dependencies)
  - [1.7. Tests](#17-tests)
  - [1.8. License](#18-license)


## 1.3. Introduction

The main focus of this project is to provide a functioning Webpack 5 bundler configuration able to handle the following:
- Dynamically update UI based on user input
- Store the external API details on node.js server side
- Minimize and optimize the bundle size
- Utilise Sass for CSS pre-processing


## 1.4. Installation

After dependencies have been installed, the following steps are required to get the project up and running:

Dev Mode:
>  Run `npm run dev` to start the development server
>  Run `npm serve` in a second console to start the node express server

Prod Build:
>  Run `npm run build` to start the production build

Test:
>  Run `npm test` to run the unit tests

Run the App:
>  Run `npm start` to start the application


## 1.5. Links

MeaningCloud API: [https://www.meaningcloud.com/developers/sentiment-analysis/](https://www.meaningcloud.com/developers/sentiment-analysis/)


## 1.6. Dependencies

View the project dependencies in the command terminal:
> npm run list-deps


## 1.7. Tests

Unit tests have been written to ensure the functionality of the project is working as intended, using Jest.


## 1.8. License
MIT License

Copyright (c) [2022] [Mark J Rawlins]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.