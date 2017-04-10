CREATE TABLE human (
  id bigserial primary key,
  name varchar(80),
  daily_time int
);

CREATE TABLE dog (
  id bigserial primary key,
  name varchar(80),
  age decimal,
  weight decimal
);

CREATE TABLE dog_human (
  id bigserial primary key,
  dog_id integer references dog (id),
  human_id integer references human (id)
);

CREATE TABLE training (
  id bigserial primary key,
  type varchar(80),
  description text,
  goals text
);

CREATE TABLE event (
  id bigserial primary key,
  created_at timestamp default current_timestamp,
  duration int,
  reward varchar(80),
  trigger text,
  dog_response text,
  dog_id integer references dog (id),
  human_id integer references human (id),
);
