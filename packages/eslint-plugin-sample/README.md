# eslint-plugin-sample

This is a sample plugin.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-sample`:

```sh
npm install eslint-plugin-sample --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-sample` and add `sample` to the `plugins` key:

```js
import sample from "eslint-plugin-sample";

export default [
  {
    plugins: {
      sample,
    },
  },
];
```

Then configure the rules you want to use under the `rules` key.

```js
import sample from "eslint-plugin-sample";

export default [
  {
    plugins: {
      sample,
    },
    rules: {
      "sample/rule-name": "warn",
    },
  },
];
```

## Configurations

<!-- begin auto-generated configs list -->

TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).

<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->

| Name                                     | Description                                        |
| :--------------------------------------- | :------------------------------------------------- |
| [no-new-date](docs/rules/no-new-date.md) | Rule for detecting any usage of new Date() syntax. |

<!-- end auto-generated rules list -->
