import {
  getAllApartments,
  getApartmentById,
  addNewApartment,
} from "../services/apartmentService";

export const getAllApartmentsHandler = async (req, res, next) => {
  try {
    const skip = +req.query.skip;
    const take = +req.query.take;
    const keyword = req.query.keyword;
    const apartments = await getAllApartments(skip, take, keyword);

    res.status(200).json({ data: apartments });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getApartmentByIdHandler = async (req, res, next) => {
  try {
    const id = +req.params.id;

    const apartment = await getApartmentById(id);
    res.status(200).json({ data: apartment });
  } catch (error) {
    next(error);
  }
};

export const addNewApartmentHandler = async (req, res, next) => {
  try {
    const requestBody = req.body;
    const { body } = requestBody;

    const createdApartment = await addNewApartment(body);

    res.status(201).json({ data: { createdApartment } });
  } catch (error) {
    next(error);
  }
};
