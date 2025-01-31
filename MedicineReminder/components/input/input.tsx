import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform,View,Text } from 'react-native';
import { InputContainer, InputTitle, TextInput, TextInputBox } from './input.style';




export default function Input() {
  return (
    <InputContainer>
      <InputTitle>E-mail</InputTitle>
      <TextInputBox>
            <TextInput placeholder="email@exemplo.com" />
      </TextInputBox>
      
    </InputContainer>
  );
}


