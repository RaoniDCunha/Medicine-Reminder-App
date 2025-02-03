import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity } from 'react-native';
import { ButtonText, ButtonContainer } from './button.style';
import React from 'react';

interface ButtonProps {
    onPress: () => void;
    children?: React.ReactNode
    backgroundColor?: string
}

export default function Button({onPress,children, backgroundColor}: ButtonProps) {

  return (
    <TouchableOpacity onPress={onPress} style={{width: '100%'}}>
    <ButtonContainer backgroundColor={backgroundColor}>
        
        {children}
        
    </ButtonContainer>
    </TouchableOpacity>
  );    
}

Button.IconButton = IconButton;
Button.TextButton = TextButton;

interface IconButtonProps {
    icon:  React.ReactNode;
}

function IconButton({icon}: IconButtonProps) {

    return (
      
            <View style={{alignItems: 'center',justifyContent: 'center'}}>
                {icon}
            </View>
                
            
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