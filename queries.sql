
INSERT INTO users (email, name, password, token) VALUES ('sonya@mail.ru', 'Соня', 'dulya', "");

INSERT INTO categories (name) VALUES ('Сеты'), ('Роллы'), ('Пицца'), ('Wok');

INSERT INTO catalog (url, quantity, weight, calorie, price, name, stock,
hit, new, veg, category_id)  VALUES
('miniset5.jpg', '14', '450', '400', '510', 'Минисет №5', '1', '', '', '', '1'),
('set6.jpg', '16', '460', '490', '400', 'Сет №6', '', '1', '', '', '1'),
('set8.jpg', '24', '960', '800', '1590', 'Сет №8', '', '', '1', '', '1'),
('set10.jpg', '72', '1560', '1200', '2050', 'Сет №10', '', '', '', '', '1'),
('set11.jpg', '6', '450', '400',  '390', 'Сет №11', '', '', '', '', '1'),

('kunsey-batakon.jpg', '8', '250', '350', '260', 'Кунсей батакон', '1', '', '', '', '2'),
('unagi-diru.jpg', '8', '960', '800', '280', 'Унаги диру', '', '1', '', '', '2'),
('filadelfia.jpg', '8', '450', '400', '280', 'Филадельфия', '', '', '1', '', '2'),
('mexicansky.jpg', '8', '460', '490', '260', 'Мексиканский', '', '', '', '', '2'),
('trout-roll.jpg', '6', '400', '400',  '290', 'Форель', '1', '', '1', '', '2'),

('bavarian-pizza.jpg', '33', '680', '1350', '480', 'Баварская', '1', '', '', '', '3'),
('vegetarian-pizza.jpg', '33', '755', '1800', '380', 'Вегетарианская', '', '', '', '1', '3'),
('pepperoni-pizza.jpg', '33', '615', '1400', '450', 'Пепперони', '', '1', '', '', '3'),
('classic-pizza.jpg', '33', '590', '1490', '390', 'Классическая', '', '', '', '', '3'),
('mushroom-pizza.jpg', '33', '450', '1400',  '410', 'Грибная', '', '', '1', '', '3'),

('beef-wok.jpg', '', '400', '1350', '430', 'С говядиной', '1', '', '', '', '4'),
('hen-wok.jpg', '', '400', '1350', '290', 'С курицей', '', '1', '', '', '4'),
('seafood-wok.jpg', '', '400', '1350', '430', 'С морепродуктами', '', '', '1', '', '4'),
('vegetable-wok.jpg', '', '400', '1350', '410', 'С овощами', '', '', '', '1', '4'),
('shrimp-wok.jpg', '', '400', '1350',  '400', 'С креветками', '', '', '1', '', '4');

INSERT INTO sauce (price, name) values ('140', 'Китайский соус'),
('120', 'Cоевый соус'), ('150', 'Teriyaki'), ('130', 'Чили');

SELECT *  FROM menu WHERE  name_category = '?'

SELECT *  FROM menu WHERE  new


//получить список из всех проектов для одного пользователя
SELECT *  FROM projects WHERE  author_id = 1

//получить список из всех задач для одного проекта
SELECT *  FROM tasks WHERE  project_id = 3

//пометить задачу как выполненную
UPDATE tasks SET done = 1 WHERE id = 2

//получить все задачи для завтрашнего дня
SELECT *  FROM tasks WHERE date_completion BETWEEN '2018-11-28' AND '2018-11-29'

//обновить название задачи по её идентификатору
UPDATE tasks SET name = 'Купить кота' WHERE id = 4
