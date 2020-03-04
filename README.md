# eslint-config-alanramsay-react

ESLint config based on eslint-config-react-app and prettier.

## How to install

- Run `npx install-peerdeps eslint-config-alanramsay-react --dev`

## How to configure

- Create a file named `.eslintrc.js` with the following contents:

```js
module.exports = {
  extends: ['eslint-config-alanramsay-react']
};
```

- Create a file named `.eslintignore` with the following contents:

```sh
node_modules
!.eslintrc.js
```

- Add any folders that you do not want to be linted into the `.eslintignore` file, e.g. `build`, `out`
- Add `lint` and `lint-fix` entries under the `scripts` section of your package.json, e.g:

```json
"scripts": {
  "lint": "eslint .",
  "lint-fix": "eslint . --fix"
}
```

Note these commands will lint all JavaScript files in your project so you it is important that you have ignored any output folders by adding them to the `.eslintignore` file (copying the globs from your .gitignore file is normally helpful)

## How to run

- Use `npm run lint-fix` to lint all files and fix any fixable errors automatically

## Lint on commit using Husky and lint-staged

- Run `npm install --save-dev lint-staged husky`
- Add a `lint-staged` section within your `package.json` file with the following content (note this is not within the `scripts` section but in the root):

```json
"lint-staged": {
  "**/*.js": [
    "eslint --fix",
    "git add"
  ]
}
```

- Add a `precommit` script to your `package.json`, scripts, e.g.

```json
"scripts": {
  "lint": "eslint .",
  "lint-fix": "eslint . --fix",
  "lint-staged": "lint-staged"
}
```

- You can now run `npm run lint-staged` to fix linting errors in any JavaScript files that are currently staged in Git. When you have a large codebase, this will be significantly faster than linting all files in your project unnecessarily.
- Add a `precommit` command to the scripts in your `package.json` file, e.g.

```json
"scripts": {
  "lint": "eslint .",
  "lint-fix": "eslint . --fix",
  "lint-staged": "lint-staged",
  "precommit": "lint-staged"
}
```

- Whenever you commit to Git, the system will now automatically run `lint-staged`, which will automatically fix any fixable linting issues in files that that are currently staged in Git.
