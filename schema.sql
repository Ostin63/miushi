CREATE DATABASE miushi
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE miushi;

CREATE TABLE categories (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`name` VARCHAR(64) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE product (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`url` VARCHAR(255) NOT NULL,
`quantity` VARCHAR(255) DEFAULT NULL,
`weight` INT(25) UNSIGNED NOT NULL,
`calorie` INT UNSIGNED NOT NULL,
`price` INT UNSIGNED NOT NULL,
`catalog_name` VARCHAR(255) NOT NULL,
`stock` VARCHAR(255) DEFAULT NULL,
`hit` VARCHAR(255) DEFAULT NULL,
`new` VARCHAR(255) DEFAULT NULL,
`veg` VARCHAR(255) DEFAULT NULL,
`category_id` INT UNSIGNED NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE sauce (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`price` INT UNSIGNED NOT NULL,
`name` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE key `name`(`name`)
);

CREATE TABLE basket (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`product_name` VARCHAR(255) NOT NULL,
`product_quantity` INT UNSIGNED NOT NULL,
`product_price` INT UNSIGNED NOT NULL,
`sauce_name` VARCHAR(255) NOT NULL,
`sauce_price` INT UNSIGNED NOT NULL,
`sauce_quantity` INT UNSIGNED NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE basketorder (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`date_creation` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
`product_name` VARCHAR(255) NOT NULL,
`product_quantity` INT UNSIGNED NOT NULL,
`product_price` INT UNSIGNED NOT NULL,
`sauce_name` VARCHAR(255) NOT NULL,
`sauce_price` INT UNSIGNED NOT NULL,
`sauce_quantity` INT UNSIGNED NOT NULL,
`price` INT UNSIGNED NOT NULL,
`client_name` VARCHAR(255) DEFAULT NULL,
`client_phone` VARCHAR(255) NOT NULL,
`client_address` VARCHAR(255) NOT NULL,
`type_of_delivery` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id`)
);
