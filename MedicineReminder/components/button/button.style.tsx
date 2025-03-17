import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import styled from "styled-components/native";
import { horizontalScale, moderateScale, verticalScale } from "@/utils/dimensions";

export const ButtonContainer = styled.View<{ backgroundColor?: string }>`
  height: ${verticalScale(56)}px;
  width: 100%;
  background-color: ${({ backgroundColor }: { backgroundColor?: string }) => backgroundColor || Colors.mainColors.redBase};
  justify-content: center;
  align-items: center;
  padding: 0 ${horizontalScale(10)}px;
  border-radius: ${moderateScale(50)}px;
  gap: ${moderateScale(12)}px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-family: ${Fonts.subheading.fontFamily};
  font-size: ${moderateScale(Fonts.subheading.size)}px;
  line-height: ${moderateScale(Fonts.subheading.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray800};
`;

