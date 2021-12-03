CREATE DATABASE homework4;

CREATE TABLE posts(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(50),
    body VARCHAR(500),
    image_url VARCHAR,
    image_description VARCHAR(50),
    likes INT NOT NULL DEFAULT 0,
    posted_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

