# @macchie7/node-xfconf-query

[![npm](https://img.shields.io/npm/dt/@macchie7/node-xfconf-query)](https://www.npmjs.com/package/@macchie7/node-xfconf-query)
[![NPM version](https://badge.fury.io/js/node-xfconf-query.svg)](https://www.npmjs.com/package/node-xfconf-query)
[![License](https://img.shields.io/github/license/macchie/node-xfconf-query)](https://github.com/macchie/node-xfconf-query/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/macchie/node-xfconf-query)](https://github.com/macchie/node-xfconf-query/issues)
[![GitHub forks](https://img.shields.io/github/forks/macchie/node-xfconf-query)](https://github.com/macchie/node-xfconf-query/network)
[![GitHub stars](https://img.shields.io/github/stars/macchie/node-xfconf-query)](https://github.com/macchie/node-xfconf-query/stargazers)
![GitHub top language](https://img.shields.io/github/languages/top/macchie/node-xfconf-query)

<!-- [![build-and-test-package](https://github.com/macchie/node-xfconf-query/workflows/build-and-test-package/badge.svg)](https://github.com/macchie/node-xfconf-query/tree/master/tests)
[![publish-npm-package](https://github.com/macchie/node-xfconf-query/workflows/publish-npm-package/badge.svg)](https://github.com/macchie/node-xfconf-query/releases)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@macchie7/node-xfconf-query)](https://www.npmjs.com/package/@macchie7/node-xfconf-query?activeTab=dependencies) -->

[![Patreon](https://img.shields.io/badge/Donate-Patreon-informational)](https://www.patreon.com/macchie)
<!-- [![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40my-templates%2Fnode-xfconf-query)](https://twitter.com/intent/tweet?text=I%20want%20to%20share%20TypeScript%20library:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40my-templates%2Fnode-xfconf-query)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-lopatnov-informational?style=social&logo=linkedin)](https://www.linkedin.com/in/lopatnov/) -->

xfconf-query wrapper for nodejs

## Install

<!-- [![https://nodei.co/npm/@macchie7/node-xfconf-query.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@macchie7/node-xfconf-query.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@macchie7/node-xfconf-query) -->

```shell
npm install node-xfconf-query
```

<!-- [Browser](//my-templates.github.io/TypeScript-Library/dist/library.js)

```html
<script src="//my-templates.github.io/TypeScript-Library/dist/library.min.js"></script>
``` -->

## Import package to the project

### TypeScript

```typescript
import XFConfQuery from "node-xfconf-query";
```

### JavaScript

```javascript
var XFConfQuery = require("node-xfconf-query");
```

## Usage

### List Channel Properties

```javascript
const properties = XFConfQuery.list('xfce4-power-manager');
```

### Read Property Value

```javascript
const dpmsEnabled = XFConfQuery.read('xfce4-power-manager', '/xfce4-power-manager/dpms-enabled');
```

### Write Property Value

```javascript
const result = XFConfQuery.write('xfce4-power-manager', '/xfce4-power-manager/dpms-enabled', true);
```

<!-- ## package.json

Change variables:

- name
- description
- umdName
- libraryFile
- main
- module
- types
- homepage
- repository
- bugs
- keywords -->

<!-- ## commands

`npm run build`

`npm run watch`

`npm run test` -->

<!-- ## Demo

See, how it's working: [https://runkit.com/macchie/node-xfconf-query](https://runkit.com/macchie/node-xfconf-query)

Test it with a runkit: [https://npm.runkit.com/@macchie7/node-xfconf-query](https://npm.runkit.com/%40my-templates%2Fnode-xfconf-query) -->

## Rights and Agreements

License [Apache-2.0](https://github.com/macchie/node-xfconf-query/blob/master/LICENSE)

Copyright 2020 Andrea Macchieraldo
