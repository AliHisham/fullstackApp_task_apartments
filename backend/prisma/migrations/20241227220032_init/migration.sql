/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Apartments" (
    "id" SERIAL NOT NULL,
    "apartmentAddress" TEXT NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,

    CONSTRAINT "Apartments_pkey" PRIMARY KEY ("id")
);
