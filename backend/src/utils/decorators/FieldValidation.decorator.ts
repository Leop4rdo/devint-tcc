import { SimpleConsoleLogger } from "typeorm";
import BusinessLogicError from "../../handler/BusinessLogicError ";
import errors from "../../handler/errors.handler";

export const IsRequired = () => {
  return (target : Object, property : string) => {
    const original = target[property];
    let _property : typeof original

    const getter = () => _property

    const setter = (value: any) => {

      if (value === undefined || value === null)
                throw new BusinessLogicError({
                    errorMessage : `Field '${property}' can not be null!`,
                    errorCode : errors.NULL_FIELD.code
                })
        _property = value             

    }

    Object.defineProperty(target, property, {
        get: getter,
        set: setter
    });
}   
};



export const IsInEnum = (_enum: object) => {
  return (target: any, property: string) => {
    
    const original = target[property];
    let _property : typeof original

    const getter = () => _property

    const setter = (value : any) => {
        if (Object.values(_enum).indexOf(value) === -1)
            throw new BusinessLogicError({
                errorMessage : `Feld '${property}' value is not valid'!`,
                errorCode : errors.BASE.code
            })

        _property = value
    }

    Object.defineProperty(target, property, {
        get: getter,
        set: setter
    });
  };
};
