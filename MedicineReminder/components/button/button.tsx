import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity } from 'react-native';
import { ButtonText, ButtonContainer } from './button.style';
import React from 'react';

interface ButtonProps {
    onPress: () => void;
    children?: React.ReactNode
}

export default function Button({onPress,children}: ButtonProps) {

  return (
    <ButtonContainer>
        <TouchableOpacity onPress={onPress}>
        {children}
        </TouchableOpacity>
    </ButtonContainer>
  );    
}

Button.IconButton = IconButton;
Button.TextButton = TextButton;

interface IconButtonProps {
    icon:  React.ReactNode;
}

function IconButton({icon}: IconButtonProps) {

    return (
      
            <ButtonText>Entrar</ButtonText>
    );    
  }

interface TextButtonProps {
    name: string;
}

function TextButton({name}: TextButtonProps) {

    return (
      <ButtonText>{name}</ButtonText>
    );    
  }