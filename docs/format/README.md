# FORMAT

For a better formatting experience, use Prettier in conjunction with eslint. For convenience, plugins and settings for them are used inside the IDE.

plugins:

```json
"esbenp.prettier-vscode"
"dbaeumer.vscode-eslint",
"rohit-gohri.format-code-action"
```

settings:

```json
"editor.formatOnSave": false,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"prettier.configPath": ".prettierrc",
"editor.codeActionsOnSave":
["source.formatDocument", "source.fixAll.eslint"],
```

It is also possible to format via the CLI with the `yarn format:code` commands, which use the `prettier` + `eslint --fix`

A small side effect when formatting can be seen right in the code, on saving the file, the code can jump unpleasantly, since the formatting is applied in turn: first Prettier, followed by Eslint, and since they can conflict, prettier will overwrite what was good in the opinion Eslint, and Eslint will then format the code for itself. If you like this behavior, you can disable the `"source.formatDocument"` option from `"editor.codeActionsOnSave"` and run the CLI command manually to format, or it can be moved to Husky's precommit hook
