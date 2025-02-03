import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity } from 'react-native';
import { Clock, Repeat, Trash2  } from 'lucide-react-native';
import { MedicineCardContainer, MedicineCardFirstRow, MedicineCardInformationContainer, MedicineCardInformationText, MedicineCardSecondRow, MedicineCardTextTitle } from './medicinecard.style';


interface MedicineCardProps {
    onPress: () => void;
    title: string;
    ocorrency: string;
    time: string;
}




export default function MedicineCard({ onPress, title, ocorrency, time }: MedicineCardProps) {
  return (
    
       <MedicineCardContainer>
        <MedicineCardFirstRow>
            <MedicineCardTextTitle>{title}</MedicineCardTextTitle>
            <TouchableOpacity onPress={onPress}>
                <Trash2 size={16} color={Colors.mainColors.redBase}/>
            </TouchableOpacity>
        </MedicineCardFirstRow>
        <MedicineCardSecondRow>
            <MedicineCardInformationContainer>
                <Clock size={14} color={Colors.GrayscaleColors.gray100}/>
                <MedicineCardInformationText>{time}</MedicineCardInformationText>
            </MedicineCardInformationContainer>
            <MedicineCardInformationContainer>
                <Repeat size={14} color={Colors.GrayscaleColors.gray100}/>
                <MedicineCardInformationText>{ocorrency}</MedicineCardInformationText>
            </MedicineCardInformationContainer>
        </MedicineCardSecondRow>
       </MedicineCardContainer>
    
    
  );
}

