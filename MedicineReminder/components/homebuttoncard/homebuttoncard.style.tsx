import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';

export const HomeButtonCardContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 326px;
  height: 112px;
  margin: 20px 0;
  border: 1px solid ${Colors.GrayscaleColors.gray600};
  background-color: ${Colors.GrayscaleColors.gray700};
  border-radius: 12px;
  padding: 16px;
`;

export const HomeImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 88px;
  background-color: ${Colors.GrayscaleColors.gray600};
  border-radius: 12px;
`;

export const HomeTextContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  width: 198px;
  height: 67px;
  border-radius: 12px;
  margin-left: 8px;
`;

export const HomeIconContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  
`;


export const HomeTextTitle = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray100};
  margin-bottom: 4px;
`;

export const HomeTextBody = styled.Text`
  font-size: ${Fonts.body.size}px;
  font-family: ${Fonts.body.fontFamily};
  line-height: ${Fonts.body.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray200};
  margin-bottom: 12px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  font-size: ${Fonts.input.size}px;
  font-family: ${Fonts.input.fontFamily};
  line-height: ${Fonts.input.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray200};
  padding: 16px;
  
`;



