import React from "react";

export const isValidEmail = (email: string) => {
    return new RegExp('/\S+@\S+\.\S+/').test(email);
}

export const isValidDate = (date: string) => {
    return new RegExp('^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$').test(date)
}

export const isEmpty = (data: any) => {
    return !data
}