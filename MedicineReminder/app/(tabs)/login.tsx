import {  useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { ContainerBottomColumn, LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform, View, Text, Alert } from 'react-native';
import Input from '@/components/input/input';
import Button from '@/components/button/button';
import PasswordInput from '@/components/password/password';
import { lazy, useState } from 'react';
import { supabase } from '@/services/supabaseClient';


export default function LoginScreen() {
    const router = useRouter();

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    //email e senha testes
    const emailTest = '';
    const passwordTest = '';


    const handleLogin = () => {
        supabase.auth.signInWithPassword({
          email: email,
          password: password,
        }).then(({ error }) => {
          if (error) {
            Alert.alert('Login', 'E-mail ou senha incorretos');
          } else {
            router.replace('/home');
          }
        });
        
        
    };

  return (
    <View style={{ flex: 1 }}>
      <LoginPageContainerTop>
        <Image source={require('../../assets/images/logo.png')} style={{ width: 200, height: 48 }} />
      </LoginPageContainerTop>
      <LoginPageContainerBottom>
        <ContainerBottomColumn>
          <Title>Entre para acessar suas receitas</Title>
          <Input inputTitle="E-mail" placeholder="email@exemplo.com" onChangeText={setEmail} />
          <PasswordInput onChangeText={setPassword} />
          <Button onPress={handleLogin}>
            <Button.TextButton name="Entrar" />
          </Button>
        </ContainerBottomColumn>
      </LoginPageContainerBottom>
    </View>
  );
}


