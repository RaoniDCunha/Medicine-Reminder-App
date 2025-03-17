import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import styled from 'styled-components/native';
import { horizontalScale, verticalScale, moderateScale } from '@/utils/dimensions';

export const MedicineCardContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: ${horizontalScale(326)}px;
  height: ${verticalScale(112)}px;
  margin: ${verticalScale(8)}px 0;
  border: 1px solid ${Colors.GrayscaleColors.gray600};
  background-color: ${Colors.GrayscaleColors.gray700};
  border-radius: ${moderateScale(12)}px;
  padding: ${moderateScale(16)}px;
`;

export const MedicineCardFirstRow = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: ${verticalScale(12)}px;
  width: 100%;
`;

export const MedicineCardSecondRow = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  gap: ${moderateScale(8)}px;
`;

export const MedicineCardTextTitle = styled.Text`
  font-size: ${moderateScale(Fonts.subheading.size)}px;
  font-family: ${Fonts.subheading.fontFamily};
  line-height: ${moderateScale(Fonts.subheading.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray200};
  margin-bottom: ${verticalScale(8)}px;
`;

export const MedicineCardInformationContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${Colors.GrayscaleColors.gray500};
  height: ${verticalScale(28)}px;
  border-radius: ${moderateScale(12)}px;
  padding: 0 ${moderateScale(12)}px;
  gap: ${moderateScale(8)}px;
`;

export const MedicineCardInformationText = styled.Text`
  font-size: ${moderateScale(Fonts.tag.size)}px;
  font-family: ${Fonts.tag.fontFamily};
  line-height: ${moderateScale(Fonts.tag.lineHeight)}px;
  color: ${Colors.GrayscaleColors.gray100};
  text-align: center;
`;

