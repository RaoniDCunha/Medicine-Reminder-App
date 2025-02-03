import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import styled from "styled-components/native";

export const ButtonContainer = styled.View<{ backgroundColor?: string }>`
  height: 56px;
  width: 100%;
  background-color: ${({ backgroundColor }: { backgroundColor?: string }) => backgroundColor || Colors.mainColors.redBase};
  justify-content: center;
  align-items: center;
  padding: 0 10px;
 
  border-radius: 50px;
  gap: 12px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-family: ${Fonts.subheading.fontFamily};
  font-size: ${Fonts.subheading.size}px;
  line-height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray800};
`;

