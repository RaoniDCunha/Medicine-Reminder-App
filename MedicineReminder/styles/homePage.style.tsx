import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';

export const HomePageContainerTop = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.GrayscaleColors.gray600};
  flex-direction: row; 
  padding: 0 20px;
`;

export const HomePageContainerBottom = styled.View`
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

export const HomeContainerBottomColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: 20px;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 400px;
  gap: 16px;
`;

export const LogOutColumn = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;


export const Title = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.body.fontFamily};
  line-height: ${Fonts.body.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray200};
  margin-bottom: 5px;
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
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1.5px solid ${Colors.mainColors.blueBase};
  margin-bottom: 20px;
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
