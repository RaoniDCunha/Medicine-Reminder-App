import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { InputContainer, InputTitle, TextInput, TextInputBox } from './input.style';
import { useRef } from 'react';

interface InputProps {
  inputTitle: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  type?: string;
}

export default function Input({ inputTitle, placeholder, onChangeText, type }: InputProps) {
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
    <InputContainer>
      <InputTitle ref={textinputTextRef}>{inputTitle}</InputTitle>
      <TextInputBox ref={textInputBoxRef}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </TextInputBox>
    </InputContainer>
  );
}

