import Button from '@/components/button/button';
import HomeButtonCard from '@/components/homebuttoncard/homebuttoncard';
import { HomeButtonCardContainer } from '@/components/homebuttoncard/homebuttoncard.style';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { HomeContainerBottomColumn, HomePageContainerBottom, HomePageContainerTop, Title, TitleName, TitleUserColumn, UserPortrait } from '@/styles/homePage.style';
import { Image, StyleSheet, Platform,View,Text } from 'react-native';




export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <HomePageContainerTop>
        <TitleUserColumn>
          <TitleUserColumn>
            <UserPortrait></UserPortrait>
            <Title>Boas Vindas</Title>
            <TitleName>Júlio Santana</TitleName>
          </TitleUserColumn>
        </TitleUserColumn>
      </HomePageContainerTop>
      <HomePageContainerBottom>
        <HomeContainerBottomColumn>
            
            <HomeButtonCard onPress={() => {}} title='Minhas receitas' description='Acompanhe os medicamentos e gerencie lembretes' image='paper' />
            <HomeButtonCard onPress={() => {}} title='Nova receita' description='Cadastre novos lembretes de receitas' image='pills' />

        </HomeContainerBottomColumn>
        <Button onPress={() => {}}>
          <Button.TextButton name="Avaliar" />
        </Button>
      </HomePageContainerBottom>
    </View>
  );
}

