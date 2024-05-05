-- CreateTable
CREATE TABLE `users` (
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
CREATE TABLE `home_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `file_path` VARCHAR(1024) NULL,
    `description` VARCHAR(2048) NOT NULL,
    `home_image_url` VARCHAR(1024) NOT NULL,
    `title` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vacancies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(512) NOT NULL,
    `experience` VARCHAR(2048) NOT NULL,
    `education` VARCHAR(2048) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `news` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(1024) NOT NULL,
    `description` VARCHAR(2048) NOT NULL,
    `file_path` VARCHAR(1024) NULL,
    `link` VARCHAR(1024) NOT NULL,
    `user_image_url` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `solutions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(512) NOT NULL,
    `description` VARCHAR(2048) NOT NULL,
    `solution_image_url` VARCHAR(1024) NOT NULL,
    `file_path` VARCHAR(2048) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SolutionService` (
    `solution_services` INTEGER NOT NULL AUTO_INCREMENT,
    `solution_id` INTEGER NOT NULL,
    `service_name` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`solution_services`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(512) NOT NULL,
    `description` VARCHAR(2048) NOT NULL,
    `file_path` VARCHAR(1024) NULL,
    `icon` VARCHAR(256) NOT NULL,
    `service_image_url` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact_us_msges` (
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
CREATE TABLE `about` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `about_image_url` VARCHAR(1024) NOT NULL,
    `description` VARCHAR(1024) NOT NULL,
    `file_path` VARCHAR(1024) NULL,
    `title` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `optimity` (
    `optimity` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(512) NOT NULL,
    `email` VARCHAR(512) NOT NULL,
    `phone` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`optimity`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_vals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(2048) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vis_mis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(512) NOT NULL,
    `description` VARCHAR(2048) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SolutionService` ADD CONSTRAINT `SolutionService_solution_id_fkey` FOREIGN KEY (`solution_id`) REFERENCES `solutions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
