## Starting app

Run the following command to install the required dependencies

```bash
npm install
```

Run the following command to run the application

```bash
npm start
```

## Testing

Run the following command to run application unit tests

```bash
npm run test:unit
```

## Building distributables

Run the `make` script, Electron Forge will generate you platform specific distributables for you to share with everyone. For more information on what kind of distributables you can make, check out the [Makers](https://www.electronforge.io/config/makers) documentation.

```bash
npm run make
```

## Publishing your app

Now you have distributables that you can share with your users. If you run the `publish` script, Electron Forge will then publish the platform-specific distributables for you, using the publishing method of your choice. For more information on what publishers we currently support, check out the [Publishers](config/publishers/) documentation.

```bash
npm run publish
```

## Commit Message Conventions

This project follows [Conventional Commits](https://www.conventionalcommits.org/) to ensure standardized and informative commit messages. It uses [commitlint](https://commitlint.js.org/) to enforce these commit message conventions.

## Technology Stack

* [Electron](https://www.electronjs.org/)
* [Electron Forge](https://www.electronforge.io/)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Material UI](https://mui.com/)
* [date-fns](https://date-fns.org/)