import { validate } from "class-validator";
import BusinessLogicError from "../../helpers/BusinessLogicError ";

export default abstract class InputPort {
    async validate() {
      const errors =  await validate(this);
  
      if (errors.length > 0) 
        throw new BusinessLogicError(errors, 'Invalid Data')

      return errors
    }
}