import React from "react";

export const isValidEmail = (email: string) => {
    return new RegExp('/\S+@\S+\.\S+/').test(email);
}

export const isValidDate = (date: any) => {
    return new RegExp('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}$').test(date)
}

export const isEmpty = (data: any) => {
    return !data
}