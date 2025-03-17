import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';
import { horizontalScale, verticalScale, moderateScale } from '@/utils/dimensions';

export const ReminderPageContainerTop = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  background-color: ${Colors.GrayscaleColors.gray600}; 
`;

export const ReminderPageContainerBottom = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.GrayscaleColors.gray800}; 
  border-top-left-radius: ${moderateScale(24)}px;
  border-top-right-radius: ${moderateScale(24)}px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  margin-top: -${verticalScale(20)}px;
  margin-bottom: ${verticalScale(14)}px;
  padding-left: ${horizontalScale(16)}px;
  padding-right: ${horizontalScale(16)}px;
`;

export const ReminderContainerTopColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: ${moderateScale(20)}px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: ${verticalScale(400)}px;
`;

export const ReminderContainerBottomColumn = styled.View`
  flex: 1;
  align-items: center;
  padding: ${moderateScale(20)}px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: ${verticalScale(400)}px;
`;

export const ReminderDescription = styled.Text`
  font-size: ${moderateScale(Fonts.body.size)}px;
  font-family: ${Fonts.body.fontFamily};
  line-height: ${moderateScale(Fonts.body.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray200};
  margin-bottom: ${verticalScale(5)}px;
`;

export const ReminderTitleName = styled.Text`
  font-size: ${moderateScale(Fonts.heading.size)}px;
  font-family: ${Fonts.heading.fontFamily};
  line-height: ${moderateScale(Fonts.heading.lineHeight)}px;
  color: ${Colors.mainColors.blueBase}; 
  margin-bottom: ${verticalScale(8)}px;
  margin-top: ${verticalScale(24)}px;
`;

export const UserPortrait = styled.View`
  align-items: center;
  justify-content: center;
  width: ${moderateScale(64)}px;
  height: ${moderateScale(64)}px;
  border-radius: 50%;
  border: ${moderateScale(1.5)}px solid ${Colors.mainColors.blueBase};
  margin-bottom: ${verticalScale(20)}px;
`;

export const TitleUserColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: ${moderateScale(20)}px;
  justify-content: center;
  flex-direction: column;
`;

export const AddButtonBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: ${moderateScale(40)}px;
  width: ${moderateScale(40)}px;
  border-radius: 50%;
  background-color: ${Colors.mainColors.blueBase}; 
`;
