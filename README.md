<h1>Integratable</h1>

[![Website integratable.info](https://img.shields.io/website-up-down-green-red/http/integratable.info.svg)](http://integratable.info/)
[![CodeFactor](https://www.codefactor.io/repository/github/jkguiang/integratable/badge)](https://www.codefactor.io/repository/github/jkguiang/integratable)
[![npm version](https://img.shields.io/badge/npm-v6.9.0-blue.svg)](https://www.npmjs.com/)
[![GitHub license](https://img.shields.io/github/license/jkguiang/integratable.svg)](https://github.com/jkguiang/integratable/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jkguiang/integratable.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/jkguiang/integratable)

[Integratable](https://www.integratable.info/#/) is an interactive integral table hosted on Github Pages. Specifically, it is a responsive, React-based website that provides the unique ability to evaluate any listed integral for any given bounds and relevant constants.

![Alt Text](https://media.giphy.com/media/27IUALBgiUYCfnkgn7/giphy.gif)

## Features
- Responsive layout
- Interactive plots ([Recharts](http://recharts.org/en-US))
- All LaTeX can be copied to clipboard
- All integrals have unique anchors for easy reference

## Integral Requests
If you wish to have an integral added, you may request it [here](https://github.com/jkguiang/integratable/issues/new/choose) by selecting and filling out the "Request Integral" issue template.

## Offline Usage
It is possible to use Integratable offline:
1. Clone this repository or download the latest release.
2. Navigate into the integratable directory and run `npm install` from the command line to install the necessary dependencies (tested for NPM version 6.9.0).
3. Run Integratable by running `npm start`.

_Note: with the recent addition of Google Analytics support, you will have to comment out these [imports](https://github.com/jkguiang/integratable/blob/master/src/App.js#L29-L30) and these [lines](https://github.com/jkguiang/integratable/blob/master/src/App.js#L129-L134). Otherwise, you will see an error pertaining to a missing file called `secrets.js` where the GA tracking ID is supposed to be stored. Alternatively, you may sift through the gh-pages branch to find it, or you can supply your own `GA_TRACKING_ID`._
