CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_first_name VARCHAR(75) NOT NULL,
    user_last_name VARCHAR(75) NOT NULL,
    user_email_address VARCHAR(255) NOT NULL,
    user_screen_name VARCHAR(75) NOT NULL,
    user_date_added TIMESTAMP NOT NULL DEFAULT NOW(),
    user_date_updated TIMESTAMP DEFAULT NULL
);