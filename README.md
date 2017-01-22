# Answer Question 100%

#### This web app allows users to post questions and answers to posted questions. {January 2017}

#### By **Brad Copenhaver**

## Description
This program is built on the Ember Javascript framework and uses Firebase to store and retrieve data. The user can post questions and answers to posted questions. Questions can be edited, but all current answers for that question at the time of the edit will be deleted. Questions can include additional information, and answers can include sources.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Setup/Installation Requirements

1. Clone this GitHub repository.
2. Navigate to the repository in the command prompt and run `>npm install`.
3. Run `>bower install`.
4. Create a new Firebase project at https://console.firebase.google.com/.
5. Please update config/environment.js with your firebase settings. You can find these at https://console.firebase.google.com/ by clicking the [Add Firebase to your web app] button on the project overview panel.

        Example:

        // config/environment.js
        var ENV = {
          locationType: 'auto',
          // ...
          firebase: {
            apiKey: 'xyz',
            authDomain: 'YOUR-FIREBASE-APP.firebaseapp.com',
            databaseURL: 'https://YOUR-FIREBASE-APP.firebaseapp.com',
            storageBucket: 'YOUR-FIREBASE-APP.appspot.com',
          },.
6. From the command prompt, run `>ember serve`.
7. In a web browser, navigate to `localhost:4200`.

## Known Bugs

No input fields are required. If new questions or answers are submitted with empty fields they will not save or display properly.

## Possible future version features

Search/filter questions.

## Support and contact details

If you have questions or comments, contact the author at bradcopenhaver@gmail.com

## Technologies Used

* Ember
* Javascript
* jQuery
* Node.js
* Bower
* html/css
* Bootstrap
* Firebase

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


### License

This project is licensed under the MIT license.

Copyright (c) 2017 **Brad Copenhaver**
