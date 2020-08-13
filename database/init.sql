BEGIN;
   
   DROP TABLE IF EXISTS users, recipes CASCADE;

   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       username VARCHAR(255) NOT NULL,
       location VARCHAR(255)
   );

   CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    time VARCHAR(255),
    ingredients TEXT,
    method TEXT
);

    INSERT INTO users (username, location) VALUES
    ('Lisa', 'London'),
    ('Terry', 'London')
    ;

COMMIT;