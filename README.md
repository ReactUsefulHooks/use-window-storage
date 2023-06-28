<p align='center'>
    <img src='/static/logo.png' width="300px" />
</p>

<p align='center'>
    <a href="https://github.com/ReactUsefulHooks/use-window-storage/blob/main/README.md">
        <img src="https://img.shields.io/badge/-ENGLISH-blueviolet?style=for-the-badge" />
    </a>
    <a href="https://github.com/ReactUsefulHooks/use-window-storage/blob/main/readme/README.ko.md">
        <img src="https://img.shields.io/badge/-KOREAN-violet?style=for-the-badge"/>
    </a>
</p>

<p align='center'>
  <!-- slack -->
  <a target="_blank" href="https://reactusefulhooks.slack.com">
    <img src="https://img.shields.io/badge/slack-reactusefulhooks-9cf.svg?logo=slack" alt="slack" />
  </a>
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

# use-window-storage

## 📌 Table of contents

- 🔮 Preview
- 🚧 Problem
- 💡 Solution
- 🌈 API
- 📝 Example
- 🏆 Contributors
- 🚀 Contribution
- 🧑‍💻 Issues
- 🚧 License
- 🦄 Sponsors

## 🔮 Preview

## 🚧 Problem

## 💡 Solution

## 🌈 API

```typescript
interface ModalController {
  top: Component: React.FC<any>
  push: (key: string, Component: React.FC<any>, props?: any) => Promise<unknown>
  pop: () => void
  close: (key: string) =>  void
  clear: () => void
}
const modal: ModalController = useModal()
```

### ModalController.top

### ModalController.push

|  params   |   type   | description | default |
| :-------: | :------: | :---------: | :-----: |
|    key    |  string  |             |         |
| Component | React.FC |             |         |
|   props   |  string  |             |         |


```typescript

```

### ModalController.pop

### ModalController.close

### ModalController.clear

## 📝 Example

## 🏆 Contributors

Thanks goes to these wonderful people.

<p align='center'>
  <a target="_blank" href="https://github.com/eddie0329"><img width="150" src="https://github.com/eddie0329.png" alt="eddie0329"></a>
</p>

## 🚀 Contribution

> Looking to contribute? Look for the [Good First Issue label](https://github.com/ReactUsefulHooks/use-window-storage/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).

Please make sure to read the [Contributing Guide](https://github.com/ReactUsefulHooks/use-window-storage/blob/main/CONTRIBUTING.md) before making any pull requests.

## 🧑‍💻 Issues

### 🐛 Bugs

Please post issue for bugs, missing documetations, or unexpected behavior

[Click for bug-report](https://github.com/ReactUsefulHooks/use-window-storage/issues/new?assignees=&labels=bug&template=bug-report.md)

### ⭐️ Feature Requests

Please post issue to suggest new features.

[Click for feature-request](https://github.com/ReactUsefulHooks/use-window-storage/issues/new?assignees=&labels=enhancement&template=feature-request.md)

## 🚧 License

[MIT](https://opensource.org/licenses/MIT)

## 🦄 Sponsors

Become first sponsor this project!

> Check out more useful react hooks [here](https://github.com/ReactUsefulHooks). <br />
> If you have any questions, feel free to join our [slack](https://reactusefulhooks.slack.com)