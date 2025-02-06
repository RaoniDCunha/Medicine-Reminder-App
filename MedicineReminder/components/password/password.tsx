import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform,View,Text } from 'react-native';
import { PasswordInputContainer, PasswordInputTitle, PasswordTextInput, PasswordTextInputBox, PasswordTextInputIconView } from './password.style';
import { Eye, EyeClosed } from 'lucide-react-native';
import React, { useRef } from 'react';


interface PasswordInputProps {
  onChangeText: (text: string) => void;
}


export default function PasswordInput({ onChangeText }: PasswordInputProps) {

  const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);

  const textInputBoxRef = useRef<View>(null);
  const textinputTextRef = useRef<Text>(null);


  const handleFocus = () => {
    if (textInputBoxRef.current) {
      (textInputBoxRef.current as any).setNativeProps({
        style: { borderColor: Colors.mainColors.blueBase }
      });

      if (textinputTextRef.current) {
        (textinputTextRef.current as any).setNativeProps({
          style: { color: Colors.mainColors.blueBase }
        });
      }
    }
  };

  const handleBlur = () => {
    if (textInputBoxRef.current) {
      (textInputBoxRef.current as any).setNativeProps({
        style: { borderColor: Colors.GrayscaleColors.gray400 }
      });
    }

    if (textinputTextRef.current) {
      (textinputTextRef.current as any).setNativeProps({
        style: { color: Colors.GrayscaleColors.gray100 }
      });
    }

  };


  return (
    <PasswordInputContainer>
      <PasswordInputTitle ref={textinputTextRef}>Senha</PasswordInputTitle>
      <PasswordTextInputBox ref={textInputBoxRef}>
            <PasswordTextInput   secureTextEntry={!isPasswordVisible} onChangeText={onChangeText} onFocus={handleFocus} onBlur={handleBlur}  />
            <PasswordTextInputIconView onPress={() => {setIsPasswordVisible(!isPasswordVisible)}}>
                {isPasswordVisible 
                ? <Eye size={24} color={Colors.mainColors.BluseLight} /> 
                : <EyeClosed size={24} color={Colors.mainColors.BluseLight} />}
            </PasswordTextInputIconView>
      </PasswordTextInputBox>
    </PasswordInputContainer>
  );
}


