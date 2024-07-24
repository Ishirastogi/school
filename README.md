# Springdale Public School Website

This is a fully functional and responsive website for Springdale Public School, built using React.js, Redux, and Tailwind CSS.

## Table of Contents

- [Project Setup](#project-setup)
- [Available Scripts](#available-scripts)

## Project Setup

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Ishirastogi/school.git
    cd school
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up Tailwind CSS:
    ```sh
    npx tailwindcss init -p
    ```

    Ensure your `tailwind.config.js` file looks like this:
    ```js
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

    Add Tailwind directives to your `src/index.css`:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

