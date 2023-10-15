-- AlterTable
ALTER TABLE "Machine" ADD COLUMN     "cpu" TEXT,
ADD COLUMN     "downloadSpeedMbps" INTEGER,
ADD COLUMN     "gpu" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "onTime" TIMESTAMP(3),
ADD COLUMN     "operatingSystem" TEXT,
ADD COLUMN     "ramGbs" INTEGER,
ADD COLUMN     "uploadSpeedMbps" INTEGER;
