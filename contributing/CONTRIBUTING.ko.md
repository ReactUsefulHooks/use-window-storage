<p align='center'>
    <a href="https://github.com/ReactUsefulHooks/use-window-storage/blob/main/CONTRIBUTING.md">
        <img src="https://img.shields.io/badge/-ENGLISH-blueviolet?style=for-the-badge" />
    </a>
    <a href="https://github.com/ReactUsefulHooks/use-window-storage/blob/main/contributing/CONTRIBUTING.ko.md">
        <img src="https://img.shields.io/badge/-KOREAN-violet?style=for-the-badge"/>
    </a>
</p>

# Contributing

Hi there! Thank you for your interest.
Before submitting your contribution, please make sure read through the following guide:

## Project setup

You will need Node.js `version 18+.` and `yarn`.

```shell
yarn install
yarn install-peer
```

### Commonly used scripts

```shell
# developing pacakge
yarn dev

# run all unit test with vite
yarn test

# run playground with next
yarn dev-next

# run playground with react
yarn dev-react
```

### Project structure

This package is structured mono-repo, using `yarn work-space`.
So please make sure using `yarn` before developing.

```shell
|_packages
  |_playground
  |_use-window-storage
```

#### playground

Playground setting with next.

#### use-window-storage

Actual deployed package will be placed here.

## Branch

The `master` branch is snapshot for the latest release.
So please checkout branch from `master`.

Branch name should be should follow regex:

```
/^(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/
```

For example:

```
feat: add feature
docs: translate readme file
```

## Commit and Pushing changes

Please make sure to run tests(`yarn test`) before commit any features.
There are no conventions for commit messages.
