# Rule for detecting any usage of new Date() syntax (`sample/no-new-date`)

<!-- end auto-generated rule header -->

This plugin is written for the purpose of a basic sample to verify functionality of ESLint Plugin.

## Rule Details

This rule aims to detect any usage of new Date() syntax.

### Examples of **incorrect** code for this rule:

```js
new Date().getTime();
```

### Examples of **correct** code for this rule:

```js
Date.now();
```

<!--

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.

-->
