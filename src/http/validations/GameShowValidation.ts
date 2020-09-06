import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().greater(0).integer().required(),
  }),
});
