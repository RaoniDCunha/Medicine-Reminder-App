import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/dimensions';
import styled from 'styled-components/native';

export const PasswordInputContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: ${horizontalScale(353)}px;
`;

export const PasswordInputTitle = styled.Text`
  font-size: ${moderateScale(Fonts.label.size)}px;
  font-family: ${Fonts.label.fontFamily};
  line-height: ${moderateScale(Fonts.label.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray100};
  margin-bottom: ${verticalScale(12)}px;
`;

export const PasswordTextInputBox = styled.View`
  height: ${verticalScale(56)}px;
  width: 100%;
  border-radius: ${moderateScale(5)}px;
  border-width: ${moderateScale(1)}px;
  border-color: ${Colors.GrayscaleColors.gray400};
  flex-direction: row;
  
`;

export const PasswordTextInput = styled.TextInput`
  width: 90%;
  font-size: ${moderateScale(Fonts.input.size)}px;
  font-family: ${Fonts.input.fontFamily};
  line-height: ${moderateScale(Fonts.input.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray200};
  padding: ${moderateScale(16)}px;
`;


export const PasswordTextInputIconView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  
`;

