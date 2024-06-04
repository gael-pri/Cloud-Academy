Drop table if EXISTS category;
Drop table if EXISTS section;
Drop table if EXISTS chapter;
Drop table if EXISTS article;
Drop table if EXISTS tag;

CREATE TABLE category (
  id_category integer PRIMARY KEY,
  name varchar(255) not null
);

CREATE TABLE section (
  id_section integer PRIMARY KEY,
  name varchar(255) not null,
  category integer not null
);

CREATE TABLE chapter (
  id_chapter integer PRIMARY KEY,
  section integer,
  title varchar(255) not null,
  description text
);

CREATE TABLE article (
  id_article integer PRIMARY KEY,
  chapter integer,
  title varchar(255) not null,
  subtitle varchar(255),
  description text
);

CREATE TABLE tag (
  id_tag integer PRIMARY KEY,
  article integer not null,
  name varchar(255) not null
);

INSERT INTO category (name) VALUES
('les languages'),
('les outils'),
('les services');

INSERT INTO section (name, category) VALUES
('html', 1),
('css', 1),
('javascript', 1),
('typescript', 1),
('sql', 1),
('typeorm', 1),
('git/github', 2),
('node', 2),
('express', 2),
('react', 2),
('n8n', 3),
('stripe', 3);

INSERT INTO chapter (section, title) VALUES
(7, 'les basiques avec git et github'),
(5, 'les basiques du sql'),
(5, 'sqlite'),
(5, 'mariaDB'),
(5, 'postgres'),
(5, 'mongoDB');

INSERT INTO article (chapter, title, description) VALUES
(1, 'nouveau projet git', 'Initier le dossier courant en dossier git'),
(1, 'routine de mise à jour du travail local', ''),
(1, 'quelques tips utiles', ''),
(3, 'installer sqlite3', ''),
(4, 'installation', 'Sur linux ubuntu...'),
(4, 'les basiques', 'Voir la version installée');