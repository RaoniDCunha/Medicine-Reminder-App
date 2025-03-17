import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { horizontalScale, verticalScale, moderateScale } from '@/utils/dimensions';
import styled from 'styled-components/native';

export const HomePageContainerTop = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.GrayscaleColors.gray600};
  flex-direction: row; 
  padding: 0 ${horizontalScale(20)}px;
`;

export const HomePageContainerBottom = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.GrayscaleColors.gray800}; 
  border-top-left-radius: ${moderateScale(24)}px;
  border-top-right-radius: ${moderateScale(24)}px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  margin-top: -${moderateScale(20)}px;
  margin-bottom: ${moderateScale(14)}px;
  padding-left: ${moderateScale(16)}px;
  padding-right: ${moderateScale(16)}px;
`;

export const HomeContainerBottomColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: ${moderateScale(20)}px;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: ${verticalScale(400)}px;
  gap: ${moderateScale(16)}px;
`;

export const LogOutColumn = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const Title = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.body.fontFamily};
  line-height: ${Fonts.body.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray200};
  margin-bottom: ${moderateScale(5)}px;
`;

export const TitleName = styled.Text`
  font-size: ${Fonts.heading.size}px;
  font-family: ${Fonts.heading.fontFamily};
  line-height: ${Fonts.heading.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray100}; 
`;

export const UserPortrait = styled.View`
  align-items: center;
  justify-content: center;
  width: ${moderateScale(64)}px;
  height: ${moderateScale(64)}px;
  border-radius: ${moderateScale(50)}px;
  border: ${moderateScale(1.5)}px solid ${Colors.mainColors.blueBase};
  margin-bottom: ${moderateScale(20)}px;
`;

export const TitleUserColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const UserImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

