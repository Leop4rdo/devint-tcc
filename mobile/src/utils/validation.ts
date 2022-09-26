export const isEmpty = (val : any) => {
    return val === undefined || val === null || val === ""
}

export const isEmail = (val : any) => {
    return new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(val);
}

export const isValidDate = (date: any) => {
    return new RegExp('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}$').test(date)
}