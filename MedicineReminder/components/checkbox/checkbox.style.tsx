import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';

export const CheckBoxContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 353px;
  gap: 12px;
`;

export const CheckBoxTitle = styled.Text`
  font-size: ${Fonts.label.size}px;
  font-family: ${Fonts.label.fontFamily};
  line-height: ${Fonts.label.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray100};
  margin-bottom: 12px;
`;

export const CheckBoxInputBox = styled.View<{isChecked: boolean}>`
  height: 24px;
  width: 24px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${({isChecked}: {isChecked: boolean}) => (isChecked ? Colors.mainColors.blueBase : Colors.GrayscaleColors.gray400)};
  background-color: ${({isChecked}: {isChecked: boolean}) => (isChecked ? Colors.mainColors.blueBase : Colors.GrayscaleColors.gray800)};
      
`;

export const TextInput = styled.TextInput`
  width: 100%;
  font-size: ${Fonts.input.size}px;
  font-family: ${Fonts.input.fontFamily};
  line-height: ${Fonts.input.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray200};
  padding: 16px;
`;



