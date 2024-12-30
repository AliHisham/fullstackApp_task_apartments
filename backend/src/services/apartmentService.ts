import {
  findAllApartments,
  findApartmentById,
  createApartment,
} from "../repositories/ApartmentRepositry";

export const getAllApartments = async (skip, take, keyword) => {
  const apartments = await findAllApartments(skip, take, keyword);

  return apartments;
};

export const getApartmentById = async (id) => {
  const apartment = await findApartmentById(id);
  return apartment;
};
export const addNewApartment = async (apartment) => {
  const createdApartment = await createApartment(apartment);
  return createdApartment;
};
