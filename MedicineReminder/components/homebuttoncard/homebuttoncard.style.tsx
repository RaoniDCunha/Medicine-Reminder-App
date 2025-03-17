import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/dimensions';
import styled from 'styled-components/native';

export const HomeButtonCardContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: ${horizontalScale(326)}px;
  height: ${verticalScale(112)}px;
  border: 1px solid ${Colors.GrayscaleColors.gray600};
  background-color: ${Colors.GrayscaleColors.gray700};
  border-radius: ${moderateScale(12)}px;
  padding: ${moderateScale(16)}px;
`;

export const HomeImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${horizontalScale(80)}px;
  height: ${verticalScale(88)}px;
  background-color: ${Colors.GrayscaleColors.gray600};
  border-radius: ${moderateScale(12)}px;
`;

export const HomeTextContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  width: ${horizontalScale(198)}px;
  height: ${verticalScale(67)}px;
  border-radius: ${moderateScale(12)}px;
  margin-left: ${moderateScale(8)}px;
`;

export const HomeIconContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  
`;


export const HomeTextTitle = styled.Text`
  font-size: ${moderateScale(Fonts.subheading.size)}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${moderateScale(Fonts.subheading.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray100};
  margin-bottom: ${moderateScale(4)}px;
`;

export const HomeTextBody = styled.Text`
  font-size: ${moderateScale(Fonts.body.size)}px;
  font-family: ${Fonts.body.fontFamily};
  line-height: ${moderateScale(Fonts.body.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray200};
  margin-bottom: ${moderateScale(12)}px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  font-size: ${moderateScale(Fonts.input.size)}px;
  font-family: ${Fonts.input.fontFamily};
  line-height: ${moderateScale(Fonts.input.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray200};
  padding: ${moderateScale(16)}px;
  
`;

