import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  height: 56px;
  width: 100%;
  background-color: ${Colors.mainColors.redBase};
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 50px;
`;

export const ButtonText = styled.Text`
  font-family: ${Fonts.subheading.fontFamily};
  font-size: ${Fonts.subheading.size}px;
  line-height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray800};
`;

