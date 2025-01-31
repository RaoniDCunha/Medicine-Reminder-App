import {  useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { ContainerBottomColumn, LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import Input from '@/components/input/input';
import Button from '@/components/button/button';


export default function LoginScreen() {
    const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <LoginPageContainerTop>
        <Image source={require('../../assets/images/logo.png')} style={{ width: 200, height: 48 }} />
      </LoginPageContainerTop>
      <LoginPageContainerBottom>
        <ContainerBottomColumn>
          <Title>Entre para acessar suas receitas</Title>
          <Input />
          <Input />
          <Button onPress={() => router.navigate('/home')}>
            <Button.TextButton name="Entrar" />
          </Button>
        </ContainerBottomColumn>
      </LoginPageContainerBottom>
    </View>
  );
}


