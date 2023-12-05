import { checkSchema } from  'express-validator';

export const getCategoryAllValidator = checkSchema({
    page : {
      matches : { options : /(^[0-9]+$)|^(?!.*\S)/},
      errorMessage: 'La página debe ser un número'
    },
    limit : {
      matches : { options : /(^[0-9]+$)|^(?!.*\S)/},
      errorMessage: 'El limite debe ser un número'
    }
  },["query"]);