# NgMat6FTB

## Angular 6 Material with Firebase:

To set up the project:

1. create a project in firebase.

2. create a database in firebase named 'clients'.

On the rules tab change the permissions as follow:

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}

3.clone this project to your local git.

4. Add your firebase credentials on firebase.dev.ts and firebase.prod.ts under environmentKeys folder.

5. create a new user manually in firebase, this user will be used to log in once the application is running.

6. Run npm start

7. Once the application is running you should be able to log in with the previously created user credentials.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
