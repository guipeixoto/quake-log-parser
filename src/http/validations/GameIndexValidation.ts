import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.QUERY]: Joi.object().keys({
    player_name: Joi.string(),
    weapon_name: Joi.string(),
  }),
});
