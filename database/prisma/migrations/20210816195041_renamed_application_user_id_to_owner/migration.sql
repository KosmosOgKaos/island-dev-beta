/*
  Warnings:

  - You are about to drop the column `user_id` on the `Application` table. All the data in the column will be lost.
  - Added the required column `owner` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "user_id",
ADD COLUMN     "owner" TEXT NOT NULL;
