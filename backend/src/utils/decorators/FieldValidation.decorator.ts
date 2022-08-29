import BusinessLogicError from "../../handler/BusinessLogicError ";
import errors from "../../handler/errors.handler";

export const IsRequired = () => {
  return (target: any, property: string) => {
    const _property = target.constructor.props[property];

    if (_property === undefined || _property === null)
      throw new BusinessLogicError({
        errorMessage: `Field '${property}' can not be null!`,
        errorCode: errors.NULL_FIELD.code,
      });    
  };    
};

export const IsInEnum = (_enum: object) => {
  return (target: any, property: string) => {
    
    const _property = target.constructor.props[property];

    if (Object.values(_enum).indexOf(_property) === -1 )
      throw new BusinessLogicError({
        errorMessage: `Feld '${property}' value is not valid'!`,
        errorCode: errors.BASE.code,
      });
  };
};
