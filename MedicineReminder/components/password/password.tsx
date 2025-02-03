import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform,View,Text } from 'react-native';
import { PasswordInputContainer, PasswordInputTitle, PasswordTextInput, PasswordTextInputBox, PasswordTextInputIconView } from './password.style';
import { Eye, EyeClosed } from 'lucide-react-native';
import React from 'react';


interface PasswordInputProps {
  onChangeText: (text: string) => void;
}


export default function PasswordInput({ onChangeText }: PasswordInputProps) {

  const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);



  return (
    <PasswordInputContainer>
      <PasswordInputTitle>Senha</PasswordInputTitle>
      <PasswordTextInputBox>
            <PasswordTextInput   secureTextEntry={!isPasswordVisible} onChangeText={onChangeText}  />
            <PasswordTextInputIconView onPress={() => {setIsPasswordVisible(!isPasswordVisible)}}>
                {isPasswordVisible 
                ? <Eye size={24} color={Colors.mainColors.BluseLight} /> 
                : <EyeClosed size={24} color={Colors.mainColors.BluseLight} />}
            </PasswordTextInputIconView>
      </PasswordTextInputBox>
    </PasswordInputContainer>
  );
}


