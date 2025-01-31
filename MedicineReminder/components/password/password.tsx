import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform,View,Text } from 'react-native';
import { PasswordInputContainer, PasswordInputTitle, PasswordTextInput, PasswordTextInputBox } from './password.style';




export default function PasswordInput() {
  return (
    <PasswordInputContainer>
      <PasswordInputTitle>Senha</PasswordInputTitle>
      <PasswordTextInputBox>
            <PasswordTextInput placeholder="12345678" secureTextEntry />
      </PasswordTextInputBox>
      
    </PasswordInputContainer>
  );
}


