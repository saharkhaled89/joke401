CREATE TABLE IF NOT EXISTS jockeTable(

    id SERIAL PRIMARY KEY,
    joke_type VARCHAR(255),
    joke_setup VARCHAR(255),
    joke_punchline VARCHAR(255)
);
