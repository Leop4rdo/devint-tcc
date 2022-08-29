import { SimpleConsoleLogger } from "typeorm";
import BusinessLogicError from "../../handler/BusinessLogicError ";
import errors from "../../handler/errors.handler";

export const IsRequired = () => {
  return (target : Object, property : string) => {
    const original = target[property];
    let _property : typeof original

    const getter = () => _property

    const setter = (value: any) => {
      console.log('param value', value)

      if (value === undefined || value === null)
                throw new BusinessLogicError({
                    errorMessage : `Field '${property}' can not be null!`,
                    errorCode : errors.NULL_FIELD.code
                })

      // original.set(value)

      console.log(original)

      console.log('real value', value)

    }

    Object.defineProperty(target, property, {
        get: getter,
        set: setter
    });
}   
};



export const IsInEnum = (_enum: object) => {
  return (target: any, property: string) => {
    
    // const _property = target.constructor.props[property];

    // if (Object.values(_enum).indexOf(_property) === -1 )
    //   throw new BusinessLogicError({
    //     errorMessage: `Field '${property}' value is not valid'!`,
    //     errorCode: errors.BASE.code,
    //   });
    //return console.log(target + "IsEnum");
  };
};
