import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient().apartments;

//handle database queries

export const findAllApartments = async (skip, take, keyword) => {
  const [apartments, totalCount] = await Promise.all([
    prismaClient.findMany({
      skip: skip,
      take: take,
      where: {
        OR: [
          {
            apartmentAddress: { contains: keyword, mode: "insensitive" },
          },
        ],
      },
    }),
    prismaClient.count({
      where: {
        OR: [
          {
            apartmentAddress: { contains: keyword, mode: "insensitive" },
          },
        ],
      },
    }),
  ]);

  return { apartments, totalCount };
};

export const findApartmentById = async (id) =>
  prismaClient.findUnique({
    where: {
      id: Number(id),
    },
  });

export const createApartment = async (apartment) => {
  return prismaClient.create({ data: apartment });
};
