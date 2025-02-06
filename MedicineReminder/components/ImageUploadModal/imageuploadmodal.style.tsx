import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.GrayscaleColors.gray600};
  flex-direction: column; 
  padding: 0 20px;
`;


export const ModalButtonRow = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

export const ModalCloseBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 30px;
  border-radius: 25px;
  border: 1px solid ${Colors.mainColors.redBase};
  margin-bottom: 20px;
`;

export const ModalCloseText = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.mainColors.redBase};
  margin-bottom: 5px;
  margin-top: 5px; 
`;

export const ModalUploadButtonBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 30px;
  border-radius: 25px;
  background-color: ${Colors.mainColors.blueBase};
  margin-bottom: 20px;
`;



export const ModalUploadButtonText = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray800};
  margin-bottom: 5px;
  margin-top: 5px; 
`;

export const ModalTitle = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${Fonts.subheading.lineHeight}px;
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
