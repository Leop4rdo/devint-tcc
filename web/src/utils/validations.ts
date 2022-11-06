import React from "react";

export const isValidEmail = (email: string) => {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return regexEmail.test(email)
}

export const isValidDate = (date: any) => {
    return new RegExp('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}$').test(date)
}

export const isEmpty = (data: any) => {
    return !data
    
}