# AngularAnimatioin

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Documentation

### Animations

This project includes several custom animations defined in the `AppComponent`:

- **rotateEarth**: Rotates an element based on the scroll direction.
- **blurHeader**: Blurs the header when scrolling down.
- **slideInCard**: Slides in a card element from the bottom when scrolling down.
- **hoverPop**: Slightly enlarges an element when hovered over.

### Tailwind CSS

Tailwind CSS is used for styling. The configuration can be found in `tailwind.config.js` and global styles are defined in `src/styles.scss`.

### Scripts

- **start**: Starts the development server.
- **build**: Builds the project for production.
- **watch**: Builds the project in watch mode.
- **test**: Runs unit tests.
- **serve:ssr:angular_animatioin**: Serves the application with server-side rendering.

For more detailed information, refer to the respective configuration files and the Angular CLI documentation.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
