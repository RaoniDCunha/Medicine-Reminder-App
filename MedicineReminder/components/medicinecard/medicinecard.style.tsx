import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';

export const MedicineCardContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 326px;
  height: 112px;
  margin: 8px 0;
  border: 1px solid ${Colors.GrayscaleColors.gray600};
  background-color: ${Colors.GrayscaleColors.gray700};
  border-radius: 12px;
  padding: 16px;
`;

export const MedicineCardFirstRow = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 12px;
  width: 100%;
`;

export const MedicineCardSecondRow = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  gap: 8px;
`;


export const MedicineCardTextTitle = styled.Text`
  font-size: ${Fonts.subheading.size}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${Fonts.subheading.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray200};
  margin-bottom: 8px;
`;

export const MedicineCardInformationContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${Colors.GrayscaleColors.gray500};
  height: 28px;
  border-radius: 12px;
  padding: 0 12px;
  gap: 8px;
`;

export const MedicineCardInformationText = styled.Text`
  font-size: ${Fonts.tag.size}px;
  font-family: ${Fonts.tag.fontFamily};
  line-height: ${Fonts.tag.lineHeight}px;
  color: ${Colors.GrayscaleColors.gray100};
  text-align: center;
`;



