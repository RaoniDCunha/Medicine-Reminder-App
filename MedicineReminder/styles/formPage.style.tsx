import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';
import { moderateScale, verticalScale } from '@/utils/dimensions';

export const FormPageContainerTop = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  background-color: ${Colors.GrayscaleColors.gray800}; 
`;

export const FormPageContainerBottom = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.GrayscaleColors.gray800}; 
  border-top-left-radius: ${moderateScale(24)}px;
  border-top-right-radius: ${moderateScale(24)}px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  margin-top: ${verticalScale(-20)}px;
  margin-bottom: ${verticalScale(14)}px;
  padding-left: ${moderateScale(16)}px;
  padding-right: ${moderateScale(16)}px;
`;

export const FormContainerTopColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: ${verticalScale(20)}px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: ${verticalScale(400)}px;
`;

export const FormContainerBottomColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: ${verticalScale(339)}px;
`;

export const FormColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: ${verticalScale(339)}px;
`;

export const FormDescription = styled.Text`
  font-size: ${Fonts.body.size}px;
  font-family: ${Fonts.body.fontFamily};
  line-height: ${Fonts.body.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray200};
  margin-bottom: ${moderateScale(5)}px;
`;

export const FormTitleName = styled.Text`
  font-size: ${Fonts.heading.size}px;
  font-family: ${Fonts.heading.fontFamily};
  line-height: ${Fonts.heading.lineHeight}px;
  color: ${Colors.mainColors.redBase}; 
  margin-bottom: ${moderateScale(8)}px;
  margin-top: ${verticalScale(24)}px;
`;

export const TitleUserColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: ${verticalScale(20)}px;
  justify-content: center;
  flex-direction: column;
`;

