-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(512) NOT NULL,
    `name` VARCHAR(512) NOT NULL,
    `position` VARCHAR(512) NOT NULL,
    `review` VARCHAR(2028) NOT NULL,
    `comapny` VARCHAR(1024) NOT NULL,
    `file_path` VARCHAR(1024) NULL,
    `user_image_url` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Home_Data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `file_path` VARCHAR(1024) NULL,
    `description` VARCHAR(2048) NOT NULL,
    `home_image_url` VARCHAR(1024) NOT NULL,
    `title` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vacancies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(512) NOT NULL,
    `experience` VARCHAR(2048) NOT NULL,
    `education` VARCHAR(2048) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `News` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(2048) NOT NULL,
    `file_path` VARCHAR(1024) NULL,
    `link` VARCHAR(1024) NOT NULL,
    `user_image_url` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(512) NOT NULL,
    `description` VARCHAR(2048) NOT NULL,
    `solution_image_url` VARCHAR(1024) NOT NULL,
    `file_path` VARCHAR(2048) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solution_Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `solution_id` INTEGER NOT NULL,
    `service_name` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(512) NOT NULL,
    `description` VARCHAR(2048) NOT NULL,
    `file_path` VARCHAR(1024) NULL,
    `icon` VARCHAR(256) NOT NULL,
    `service_image_url` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact_Us_Msg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(256) NOT NULL,
    `phone` VARCHAR(256) NOT NULL,
    `email` VARCHAR(512) NOT NULL,
    `region` VARCHAR(256) NOT NULL,
    `company` VARCHAR(256) NOT NULL,
    `message` VARCHAR(2048) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `About` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `about_image_url` VARCHAR(1024) NOT NULL,
    `description` VARCHAR(1024) NOT NULL,
    `file_path` VARCHAR(1024) NULL,
    `title` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Optimity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(512) NOT NULL,
    `email` VARCHAR(512) NOT NULL,
    `phone` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoreVal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(2048) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vismis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(512) NOT NULL,
    `description` VARCHAR(2048) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Solution_Service` ADD CONSTRAINT `Solution_Service_solution_id_fkey` FOREIGN KEY (`solution_id`) REFERENCES `Solution`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
