## Running PG demo

1. Create database (`createdb hogwarts`)
2. Open psql (`psql`)
3. Make sure you're working inside the hogwarts database (`\c hogwarts`)
4. Run the SQL script inside directory (`\i copy-file-path-here`)
5. Make sure to install pg and nodemon, and `npm init -y` before running! I also added the start script, `"start": "nodemon index.js"` to my package.json file, just to make life a bit easier.
