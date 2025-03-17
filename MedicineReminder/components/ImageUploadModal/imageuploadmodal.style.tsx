import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';
import { horizontalScale, verticalScale, moderateScale } from '@/utils/dimensions';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.GrayscaleColors.gray600};
  flex-direction: column; 
  padding: 0 ${horizontalScale(20)}px;
`;

export const ModalButtonRow = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: ${moderateScale(10)}px;
`;

export const ModalCloseBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50%;
  height: ${verticalScale(30)}px;
  border-radius: ${moderateScale(25)}px;
  border: 1px solid ${Colors.mainColors.redBase};
  margin-bottom: ${verticalScale(20)}px;
`;

export const ModalCloseText = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.mainColors.redBase};
  margin-bottom: ${moderateScale(5)}px;
  margin-top: ${moderateScale(5)}px; 
`;

export const ModalUploadButtonBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50%;
  height: ${verticalScale(30)}px;
  border-radius: ${moderateScale(25)}px;
  background-color: ${Colors.mainColors.blueBase};
  margin-bottom: ${verticalScale(20)}px;
`;

export const SelectUploadTextBox = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray700};
  margin-bottom: ${moderateScale(5)}px;
  margin-top: ${moderateScale(5)}px; 
`;

export const SelectUploadButtonBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${verticalScale(30)}px;
  border-radius: ${moderateScale(25)}px;
  background-color: ${Colors.mainColors.BluseLight};
  margin-bottom: ${verticalScale(20)}px;
`;

export const ModalUploadButtonText = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray800};
  margin-bottom: ${moderateScale(5)}px;
  margin-top: ${moderateScale(5)}px; 
`;

export const ModalTitle = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${Fonts.subheading.lineHeight}px;
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
  margin-bottom: ${verticalScale(20)}px;
`;

export const TitleUserColumn = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const UserUploadImage = styled.Image`
  width: ${moderateScale(200)}px;
  height: ${moderateScale(200)}px;
  object-fit: cover;
  margin-bottom: ${verticalScale(20)}px;
`;

