# Indian Agriculture Analytics

This project performs analytics over the Indian Agriculture dataset provided by the National Data and Analytics Platform (NITI Aayog). The results are displayed in tables using Mantine components. The application also supports dark mode.

## Features

- **Data Analytics**: Calculate and display the crop with maximum and minimum production per year and the average yield and cultivation area of crops between 1950-2020.

## Tech Stack

- **React**
- **TypeScript**
- **Mantine**
- **CSS Modules**

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd indian-agriculture-analytics

2. **Install dependencies:**
   ```bash
   yarn install
3. **File Structure**
   ```bash
   /public
   ├── Data.json               # Indian agriculture dataset
   /src
   ├── Components
   │   ├── AnalyticsTables.tsx # Component to display analytics tables
   │   ├── AnalyticsTables.module.css # CSS Module for AnalyticsTables component
   ├── utils
   │   ├── HandleData.ts       # Utility functions for data parsing and analytics
   ├── App.tsx                 # Main App component
   ├── index.tsx               # Entry point of the application
   ├── styles.css              # Global styles


![image](https://github.com/Uriyo/tables/assets/87664057/7fdb8e3c-2b7d-4ac0-a09a-d4d95c067ace)


![image](https://github.com/Uriyo/tables/assets/87664057/41f1e803-5545-4f64-b8b1-2e926643d571)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
