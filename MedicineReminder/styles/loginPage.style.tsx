import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';
import { horizontalScale, verticalScale, moderateScale } from '@/utils/dimensions';

export const LoginPageContainerTop = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.mainColors.redBase}; 
`;

export const LoginPageContainerBottom = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.GrayscaleColors.gray800}; 
  border-top-left-radius: ${moderateScale(24)}px;
  border-top-right-radius: ${moderateScale(24)}px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  margin-top: -${moderateScale(20)}px;
`;

export const ContainerBottomColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: ${moderateScale(20)}px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: ${verticalScale(400)}px;
`;

export const Title = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray100}; 
  margin-bottom: ${moderateScale(40)}px;
  margin-top: ${moderateScale(20)}px;
`;

