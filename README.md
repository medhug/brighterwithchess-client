### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Setup

- Create a new database, for example a new db called `brighterwithchess_db`
- Edit `knexfile.js` with your MySQL credentials and db name
- Install node_modules `npm install` in the root folder, where the `package.json` file is
- Create tables by either running `knex migrate:latest` if you have the Knex CLI installed, or run `npm run migrate` from the package.json scripts
- After creating tables run either `knex seed:run` or `npm run seed` to populate the tables with data
- Finally you can start the project by running either `npm start` or `npm run dev`, the 2nd option will start with `nodemon`
