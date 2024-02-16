import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const HikeSpec = {
  hikeName: Joi.string().required(),
  description: Joi.string().required(),
  difficulty: Joi.string().required(),
  length: Joi.number().allow("").optional(),
  elevation: Joi.string().required(),
};

export const LocationSpec = {
  title: Joi.string().required(),
};