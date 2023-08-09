<p align='center'>
    <img src='/static/logo.png' width="300px" />
</p>

<p align='center'>
  <!-- package version -->
  <a target="_blank" href="https://npmjs.com/package/@react-useful-hooks/use-window-storage">
    <img src="https://img.shields.io/npm/v/@react-useful-hooks/use-window-storage" alt="npm package">
  </a>
  <!-- pull request -->
  <a target="_blank" href="https://github.com/ReactUsefulHooks/use-window-storage/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-lightgrey.svg?style=flat-square" alt="PR WELCOME" />
  </a>
  <!-- example -->
  <a target="_blank" href="https://github.com/ReactUsefulHooks/use-window-storage/tree/main/packages/playground">
    <img src="https://img.shields.io/badge/%F0%9F%92%A1-examples-ff615b.svg?style=flat-square" alt="example" />
  </a>
  <!-- downloads -->
  <a target="_blank" href="http://npm-stat.com/charts.html?package=@react-useful-hooks/use-window-storage&from=2023-04-07">
    <img src="https://img.shields.io/npm/dm/@react-useful-hooks/use-window-storage.svg?style=flat-square" alt="status" />
  </a>
  <!-- bundle size -->
  <a target="_blank" href=https://img.shields.io/bundlephobia/minzip/@react-useful-hooks/use-window-storage?color=blue>
    <img src="https://img.shields.io/bundlephobia/minzip/@react-useful-hooks/use-window-storage?color=yellow" alt="bundle size" />
  </a>
  <!-- supports -->
  <a>
    <img src="https://img.shields.io/badge/support-esm,cjs-black" alt="support" />
  </a>
</p>
<br />

# 📦 use-window-storage -> NOT RELEASED YET

## 📌 Table of contents

- 🔮 Preview
- 🚧 Problem
- 💡 Solution
- 🛠 Installation
- 🌈 API
- 📝 Example
- 🏆 Contributors
- 🚀 Contribution
- 🧑‍💻 Issues
- 🚧 License
- 🦄 Sponsors

## 🔮 Preview

`use-window-storage` is the hook that provides `window.localStorage` and `window.sessionStorage` reactive.

https://github.com/ReactUsefulHooks/use-window-storage/static/use-window-storage-preview.mov

## 🚧 Problem

It is complicated to sync react state between local storage and session storage.

To make localStorage or sessionStorage value reactive needs copies of localStorage values using `useEffect` hook. Furthermore, localStorage or sessionStorage value should not be used Server Side.

## 💡 Solution

Use `use-window-storage` hook that provides encrypted storage values, safe Server Side use and reactivity.

## 🛠 Installation

```shell
// using yarn
yarn add @react-useful-hooks/use-window-storage

// using npm
npm install @react-useful-hooks/use-window-storage
```

Need to add `WindowStorageProvider` to App.

```javascript
import { WindowStorageProvider } from '@react-useful-hooks/use-window-storage';

function App() {
	return <WindowStorageProvider>//...</WindowStorageProvider>;
}
```

## 🌈 API

### 🟨 Javascript

### 🟦 Typescript

## 🏆 Contributors

Thanks to these wonderful people.

<p align='center'>
  <a target="_blank" href="https://github.com/eddie0329"><img width="150" src="https://github.com/eddie0329.png" alt="eddie0329"></a>
</p>

## 🚀 Contribution

> Looking to contribute? Look for the [Good First Issue label](https://github.com/ReactUsefulHooks/use-window-storage/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).

Please make sure to read the [Contributing Guide](https://github.com/ReactUsefulHooks/use-window-storage/blob/main/CONTRIBUTING.md) before making any pull requests.

## 🧑‍💻 Issues

### 🐛 Bugs

Please post issues for bugs, missing documentation, or unexpected behavior

[Click for bug-report](https://github.com/ReactUsefulHooks/use-window-storage/issues/new?assignees=&labels=bug&template=bug-report.md)

### ⭐️ Feature Requests

Please post issues to suggest new features.

[Click for feature-request](https://github.com/ReactUsefulHooks/use-window-storage/issues/new?assignees=&labels=enhancement&template=feature-request.md)

## 🚧 License

[MIT](https://opensource.org/licenses/MIT)

## 🦄 Sponsors

Become the first sponsor!

> Check out more useful react hooks [here](https://github.com/ReactUsefulHooks).
