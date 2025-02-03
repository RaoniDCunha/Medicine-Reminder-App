import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';

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
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  margin-top: -20px;
  margin-bottom: 14px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ReminderContainerTopColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 400px;
`;

export const ReminderContainerBottomColumn = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 400px;
`;

export const ReminderDescription = styled.Text`
  font-size: ${Fonts.body.size}px;
  font-family: ${Fonts.body.fontFamily};
  line-height: ${Fonts.body.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray200};
  margin-bottom: 5px;
`;

export const ReminderTitleName = styled.Text`
  font-size: ${Fonts.heading.size}px;
  font-family: ${Fonts.heading.fontFamily};
  line-height: ${Fonts.heading.lineHeight}px;
  color: ${Colors.mainColors.blueBase}; 
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const UserPortrait = styled.View`
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1.5px solid ${Colors.mainColors.blueBase};
  margin-bottom: 20px;
`;

export const TitleUserColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
`;
