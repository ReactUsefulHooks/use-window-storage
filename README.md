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

Use `use-window-storage` hook that provides encrypted storage values, safe Server Side use, typescript friendly and reactivity.

## 🛠 Installation

```shell
// using yarn
yarn add @react-useful-hooks/use-window-storage

// using npm
npm install @react-useful-hooks/use-window-storage
```

Need to add `WindowStorageProvider` to App.

```javascript
import {WindowStorageProvider} from '@react-useful-hooks/use-window-storage';

function App() {
    return <WindowStorageProvider>//...</WindowStorageProvider>;
}
```

## 🌈 API

LocalStorage and SessionStorage have same interface:

```typescript
interface Storage {
    get: (key: string) => unknown
    set: (key: string, value: any) => void
    clear: (key: string) => void
    clearAll: () => void
}
```

### 📦 Session Storage

#### 1. sessionStorage.get

sessionStorage.get will return value that was stored in sessionStorage:

```typescript
const {sessionStorage} = useWindowStorage<{}, { eddie: string }>()
sessionStorage.get('sam') // 🚨 typescript error> key sam is not defined
sessionStorage.get('eddie') // will return string value
```

#### 2. sessionStorage.set

sessionStorage.set will store value with designated key:

```typescript
const {sessionStorage} = useWindowStorage<{}, { eddie: string }>()
sessionStorage.set('sam', 'hello') // 🚨 typescript error> only key 'eddie' is defined
sessionStorage.set('eddie', 2) // 🚨 typescript error> key 'eddie' should have value typed string
sessionStorage.set('eddie', 'hello world') // set sessionStorage with key 'eddie'
```

#### 3. sessionStorage.clear

sessionStorage.clear will remove value with key:

```typescript
const {sessionStorage} = useWindowStorage<{}, { eddie: string }>()
sessionStorage.clear('sam') // 🚨 typescript error> there are no key 'sam'
sessionStorage.clear('eddie') // clear sessionStorage value
```

#### 3. sessionStorage.clearAll

sessionStorage.clearAll will remove all sessionStorage values:

```typescript
const {sessionStorage} = useWindowStorage<{}, { eddie: string }>()
sessionStorage.clearAll();
```

### 📦 Local Storage

#### 1. localStorage.get

localStorage.get will return value that was stored in localStorage:

```typescript
const {localStorage} = useWindowStorage<{ eddie: string }, {}>()
localStorage.get('sam') // 🚨 typescript error> key sam is not defined
localStorage.get('eddie'); // will return string value
```

#### 2. localStorage.set

localStorage.set will store value with designated key:

```typescript
const {localStorage} = useWindowStorage<{ eddie: string }, {}>()
localStorage.set('sam', 'hello') // 🚨 typescript error> only key 'eddie' is defined
localStroage.set('eddie', 2) // 🚨 typescript error> key 'eddie' should have value typed string
localStorage.set('eddie', 'hello world'); // set localStorage with key 'eddie'
```

#### 3. localStorage.clear

localStorage.clear will remove value with key:

```typescript
const {localStorage} = useWindowStorage<{ eddie: string }, {}>()
localStorage.clear('sam') // 🚨 typescript error> there are no key 'sam'
localStorage.clear('eddie'); // clear localStorage value
```

#### 3. localStorage.clearAll

localStorage.clearAll will remove all localStorage values:

```typescript
const {localStorage} = useWindowStorage<{ eddie: string }, {}>()
localStorage.clearAll();
```

## 📝 Example

```typescript
// useStorage.ts
// can overwrite and handle storage values globally
import {useWindowStorage} from '@react-useful-hooks/use-window-storage'

interface ILocalStorage {
    eddie: string
}

interface ISessionStorage {
    count: number
}

export const useStorage = useWindowStorage<ILocalStorage, ISessionStorage>
```

```tsx
// example.tsx
import React, {ReactElement} from 'react'
import {useStorage} from './useStorage'

export default function Example(): ReactElement {
    const {localStorage, sessionStorage} = useStorage()
    
    const handleCount = (increment: boolean): void => {
        const prevValue = sessionStorage.get('count')
        if (increment) sessionStorage('count', prevValue + 1)
        else sessionStorage('count', prevValue - 1)
    }

    return (
        <>
            <div>{localStorage.get('eddie')}</div>
            <div>
                <h1>{sessionStorage.get('count')}</h1>
                <button onClick={() => handleCount(true)}>PLUS</button>
                <button onClick={() => handleCount(false)}>PLUS</button>
            </div>
        </>
    );
}
```

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
