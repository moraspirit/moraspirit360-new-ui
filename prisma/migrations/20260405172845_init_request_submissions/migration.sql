-- CreateTable
CREATE TABLE `RequestSubmission` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `organization` VARCHAR(191) NOT NULL,
    `photography` BOOLEAN NOT NULL DEFAULT false,
    `videography` BOOLEAN NOT NULL DEFAULT false,
    `webService` BOOLEAN NOT NULL DEFAULT false,
    `marketing` BOOLEAN NOT NULL DEFAULT false,
    `photographyDetails` JSON NULL,
    `videographyDetails` JSON NULL,
    `webServiceDetails` JSON NULL,
    `marketingDetails` JSON NULL,
    `photographyAgendaPath` VARCHAR(191) NULL,
    `videographyAgendaPath` VARCHAR(191) NULL,
    `materialPath` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
