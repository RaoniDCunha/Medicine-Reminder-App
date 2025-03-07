import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';

export const TimeInputContainer = styled.View`
  
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 353px;
  margin-bottom: 20px;
`;

export const TimeInputTitle = styled.Text`
  font-size: ${Fonts.label.size}px;
  font-family: ${Fonts.label.fontFamily};
  line-height: ${Fonts.label.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray100};
  margin-bottom: 12px;
`;

export const TextTimeInputBox = styled.View`
  height: 56px;
  width: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${Colors.GrayscaleColors.gray400};
  
`;

export const TextTimeInput = styled.TextInput`
  width: 100%;
  font-size: ${Fonts.input.size}px;
  font-family: ${Fonts.input.fontFamily};
  line-height: ${Fonts.input.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray200};
  padding: 16px;
`;



