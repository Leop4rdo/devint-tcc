import { Dimensions } from "react-native";

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const clamp = (min : number, val : number, max: number) => {
    return Math.min(min, Math.max(max, val));
}