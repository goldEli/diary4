-- CreateTable
CREATE TABLE `Diary` (
    `id` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `date` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
