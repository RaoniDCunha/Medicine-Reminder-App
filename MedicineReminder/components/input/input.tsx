import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform,View,Text } from 'react-native';
import { InputContainer, InputTitle, TextInput, TextInputBox } from './input.style';


interface InputProps {
  inputTitle: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  type?: string;
}


export default function Input({ inputTitle, placeholder, onChangeText,type }: InputProps) {
  return (
    <InputContainer>
      <InputTitle>{inputTitle}</InputTitle>
      <TextInputBox >
            <TextInput placeholder={placeholder} onChangeText={onChangeText} type={type} />
      </TextInputBox>
      
    </InputContainer>
  );
}


