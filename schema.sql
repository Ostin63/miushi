CREATE DATABASE miushi
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE miushi;

CREATE TABLE categories (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`name` VARCHAR(64) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE catalog_menu (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`product_url` VARCHAR(255) NOT NULL,  //ссылка картинки
`product_quantity` VARCHAR(64) DEFAULT NULL, //комплектность товара
`product_weight` INT UNSIGNED NOT NULL,  //вес товара
`product_calorie` INT UNSIGNED NOT NULL,  //колорийность
`product_price` INT UNSIGNED NOT NULL,   //цена
`name` VARCHAR(255) NOT NULL,  //название товара
`stock` VARCHAR(64) DEFAULT NULL, // акции
`hit` VARCHAR(64) DEFAULT NULL,  //хит
`new` VARCHAR(64) DEFAULT NULL,  //новинка
`veg` VARCHAR(64) DEFAULT NULL, //вегетарианская
`category_id` INT UNSIGNED NOT NULL, //id категории
PRIMARY KEY (`id`)
);

CREATE TABLE sauce (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`price` INT UNSIGNED NOT NULL,   //цена
`name` VARCHAR(255) NOT NULL,  //название товара
PRIMARY KEY (`id`),
UNIQUE key `name`(`name`)
);

CREATE TABLE users (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`date_creation` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
`email` VARCHAR(255) NOT NULL,
`name` VARCHAR(255) NOT NULL,
`password` VARCHAR(64) NOT NULL,
`token`VARCHAR(64) DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `email`(`email`)
);

/*
//создание индекса для поля
CREATE FULLTEXT INDEX task_search ON tasks(name)
*/
