import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

import { Image, StyleSheet, Platform,View,Text, TouchableOpacity } from 'react-native';
import { CheckBoxContainer, CheckBoxInputBox, CheckBoxTitle } from './checkbox.style';
import { Check } from 'lucide-react-native';


interface CheckBoxProps {
  boxTitle: string;
  placeholder?: string;
  type?: string;
  isChecked?: boolean;
  onClick?: () => void;
}


export default function CheckBox({ boxTitle, placeholder,type,isChecked,onClick }: CheckBoxProps) {
  return (
    <CheckBoxContainer>
        <TouchableOpacity onPress={onClick}>
            <CheckBoxInputBox isChecked={isChecked}>
                {isChecked && <Check size={24} color={Colors.mainColors.blueBase} />}
            </CheckBoxInputBox>
        </TouchableOpacity>
            <CheckBoxTitle>
                {boxTitle}
            </CheckBoxTitle>
    </CheckBoxContainer>
  );
}


