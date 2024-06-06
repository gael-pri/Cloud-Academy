Drop table if EXISTS category;
Drop table if EXISTS section;
Drop table if EXISTS chapter;
Drop table if EXISTS article;
Drop table if EXISTS tag;
Drop table if EXISTS articles_tags;

CREATE TABLE category (
  id_category integer PRIMARY KEY,
  name varchar(255) not null,
  description text
);

CREATE TABLE section (
  id_section integer PRIMARY KEY,
  name varchar(255) not null,
  categoryId integer not null,
  FOREIGN KEY (categoryId) REFERENCES category(id_category)
);

CREATE TABLE chapter (
  id_chapter integer PRIMARY KEY,
  title varchar(255) not null,
  description text,
  sectionId integer not null,
  FOREIGN KEY (sectionId) REFERENCES section(id_section)
);

CREATE TABLE article (
  id_article integer PRIMARY KEY,
  title varchar(255) not null,
  subtitle varchar(255),
  description text,
  chapterId integer not null,
  FOREIGN KEY (chapterId) REFERENCES chapter(id_chapter)
);

CREATE TABLE tag (
  id_tag integer PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE articles_tags (
  id_article_tag integer PRIMARY KEY,
  articleId integer,
  tagId integer, 
  FOREIGN KEY (articleId) REFERENCES article(id_article), 
  FOREIGN KEY (tagId) REFERENCES tag (id_tag)
);

INSERT INTO category (name, description) VALUES
('les languages', 'apprendre à parler pour commencer'),
('les outils', 'essentiel pour bien travailler'),
('les services', 'toujours bon à prendre');

INSERT INTO section (name, categoryId) VALUES
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

INSERT INTO chapter (sectionId, title) VALUES
(7, 'les basiques avec git et github'),
(5, 'les basiques du sql'),
(5, 'sqlite'),
(5, 'mariaDB'),
(5, 'postgres'),
(5, 'mongoDB');

INSERT INTO article (chapterId, title, description) VALUES
(1, 'nouveau projet git', 'Initier le dossier courant en dossier git'),
(1, 'routine de mise à jour du travail local', ''),
(1, 'quelques tips utiles', ''),
(3, 'installer sqlite3', ''),
(4, 'installation', 'Sur linux ubuntu...'),
(4, 'les basiques', 'Voir la version installée');