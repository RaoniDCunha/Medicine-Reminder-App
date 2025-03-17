import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { horizontalScale, verticalScale, moderateScale } from '@/utils/dimensions';
import styled from 'styled-components/native';

export const CheckBoxContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: ${horizontalScale(353)}px;
  gap: ${moderateScale(12)}px;
`;

export const CheckBoxTitle = styled.Text`
  font-size: ${Fonts.label.size}px;
  font-family: ${Fonts.label.fontFamily};
  line-height: ${Fonts.label.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray100};
  margin-bottom: ${moderateScale(12)}px;
`;

export const CheckBoxInputBox = styled.View<{isChecked: boolean}>`
  height: ${moderateScale(24)}px;
  width: ${moderateScale(24)}px;
  border-radius: ${moderateScale(5)}px;
  border-width: ${moderateScale(1)}px;
  border-color: ${({isChecked}: {isChecked: boolean}) => (isChecked ? Colors.mainColors.blueBase : Colors.GrayscaleColors.gray400)};
  background-color: ${({isChecked}: {isChecked: boolean}) => (isChecked ? Colors.mainColors.blueBase : Colors.GrayscaleColors.gray800)};
      
`;

export const TextInput = styled.TextInput`
  width: 100%;
  font-size: ${Fonts.input.size}px;
  font-family: ${Fonts.input.fontFamily};
  line-height: ${Fonts.input.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray200};
  padding: ${moderateScale(16)}px;
`;

