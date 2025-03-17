
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const BaseWidth = 390;
const BaseHeight = 844;

// width
const horizontalScale = (size: number) => (width / BaseWidth) * size;

// height
const verticalScale = (size: number, factor = 1.1) =>
    (height / BaseHeight) * size * factor;

// font, margin, padding, border, gap
const moderateScale = (size: number) =>
    (horizontalScale(size) + verticalScale(size)) / 2;

export { horizontalScale, verticalScale, moderateScale };