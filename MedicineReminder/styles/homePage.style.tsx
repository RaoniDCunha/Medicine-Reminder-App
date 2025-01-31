import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';

export const HomePageContainerTop = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.GrayscaleColors.gray600}; 
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
`;

export const ContainerBottomColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 400px;
`;

export const Title = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray100}; 
  margin-bottom: 40px;
  margin-top: 20px;
`;

