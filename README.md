# tappx
 Technical Test for :tappx - React  and UX/UI

 # Frontend Test

Hi, the main idea of this test is to develop a basic application using some specific
technologies to check your level.

## What do we need to be developed?
● User Interface: Design and implement a clean and visually attractive UI
● Client Side/Frontend service: Developed with ReactJS
The app that you are going to build is an App Developer Manager. It's a one page app
that consumes an Api service to generate random person data and lets it interact with
this person data.
The App will be a simple but responsive and visually attractive page. The design of
this app has to follow the tappx brand colors that you can see at tappx.com
The app consists in a unique view that contains:
● A page header, with the tappx logo and the title of the page.
● A button that adds a new random developer to the table, and stores it at
localstorage.
● A responsive table, that shows the developers stored at the bbdd.

### The button
A ‘New Developer’ button that gets a random user from a random user generator API:
https://randomuser.me/documentation, updates the table and stores at localstorage.
The fields that will be used are: name, location(city), email, and cell.

### The Table
It has to show the name, city, email and cell of the developers and also add an extra
column with an edit and delete action button.
The delete button will remove the developer. The edit button has to open a modal.
The table has to be initially set up with 50 developers. It has to be generated with the
random user generator.

### The Modal
The modal will be a form that lets to modify the data obtained from the random user
generator, and also contains new optional fields:
● Name, City, email, Cell and Bundle as input text
● Active, as a checkbox
● Category, a select with this options: Tool, Music, Game, Social
● Submit and cancel buttons
Before submitting the form, it has to validate the bundle field and show an error
message if something is wrong. Submitting updates the developer data stored at
localstorage.
A valid bundle value should be lowercase and a valid android package name. A valid
package name should follow the next rules:
● It must have at least two segments (one or more dots).
● Each segment must start with a letter.
● All characters must be alphanumeric or an underscore [a-zA-Z0-9_].
● Valid example: com.tappx.app, net.test.foto
● Invalid example: testapp, test.1app

## Frontend Template
We’d like to see more elements at the App, only to see your design and CSS abilities.
These elements do not have to do any functionality or backend business logic.
You can add more elements to the modal, table, header, footer. Or create a second
view. As an example, you can add:
- A section to the table with some row filters (category, active)
- A search bar at the header
- The header can also contain a navigation bar with a dropdown.
- Before or after the table, you can add a grid with some boxes that show fake
stats data.
- Add icons or images.
- A sidebar menu with multi level sections.
- Pagination.

## Others:
You are free to structure the project as you see fit and use the libraries and tools you
think necessary to complete the task. Apply creativity and add whatever you want if you
have extra time.
You must to do the test by yourself


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
