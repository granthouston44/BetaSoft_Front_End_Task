This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To start

`npm install` 
To install all packages associated with the app

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Progress

I've managed to return the top 50 posts, with pagination enabled and limited to 5 posts per page. 

User data is fetched and can be used in further stages of development, however username is the only data in use in this current iteration.

Comment data is also fetched and loaded upon a button press that toggles the display of comments on/off.

## Helpers

There are two helper files included in the build. 
A capitalization function that can be imported to capitalize the start of any string.
Similarly, a request helper that can be used in future to build any other requests that may be needed.

## Known Issues

The search filter doesn't quite work as expected. 
It will not load results that don't match the filter, however the pagination doesn't work to show the filtered results on the current page. 

If you search 'samantha' - then click on page 6 you will see the results.
Evey other post will be in a permanent state of "loading"

## Future iterations

CSS improvements - make the site more interesting and pleasing to the eye.

Filters - filter posts by user, filter by comment popularity etc
Improve and complete filter by user function

Read up on react hooks and see if they can be of any use for the project 

## Refactoring

I'd like to look into PropTypes to help improve readability and provide type safety.



## React Bootstrap notes

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
