import { validate } from "class-validator";

export default abstract class DTO {
    async validate() {
        const errors =  await validate(this);
    
        if (errors.length > 0) 
          console.log('[ERROR] validation errors :', errors)

        return errors
    }
}