import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { horizontalScale, verticalScale, moderateScale } from '@/utils/dimensions';
import styled from 'styled-components/native';

export const TimeInputContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: ${horizontalScale(353)}px;
  margin-bottom: ${verticalScale(20)}px;
`;

export const TimeInputTitle = styled.Text`
  font-size: ${moderateScale(Fonts.label.size)}px;
  font-family: ${Fonts.label.fontFamily};
  line-height: ${moderateScale(Fonts.label.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray100};
  margin-bottom: ${verticalScale(12)}px;
`;

export const TextTimeInputBox = styled.View`
  height: ${verticalScale(56)}px;
  width: 100%;
  border-radius: ${moderateScale(5)}px;
  border-width: 1px;
  border-color: ${Colors.GrayscaleColors.gray400};
`;

export const TextTimeInput = styled.TextInput`
  width: 100%;
  font-size: ${moderateScale(Fonts.input.size)}px;
  font-family: ${Fonts.input.fontFamily};
  line-height: ${moderateScale(Fonts.input.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray200};
  padding: ${moderateScale(16)}px;
`;

