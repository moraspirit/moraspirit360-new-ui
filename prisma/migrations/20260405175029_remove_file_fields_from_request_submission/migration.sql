/*
  Warnings:

  - You are about to drop the column `materialPath` on the `RequestSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `photographyAgendaPath` on the `RequestSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `videographyAgendaPath` on the `RequestSubmission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `RequestSubmission` DROP COLUMN `materialPath`,
    DROP COLUMN `photographyAgendaPath`,
    DROP COLUMN `videographyAgendaPath`;
