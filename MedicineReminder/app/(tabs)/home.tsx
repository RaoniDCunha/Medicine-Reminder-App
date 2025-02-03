import Button from '@/components/button/button';
import HomeButtonCard from '@/components/homebuttoncard/homebuttoncard';
import { HomeButtonCardContainer } from '@/components/homebuttoncard/homebuttoncard.style';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { supabase } from '@/services/supabaseClient';
import { HomeContainerBottomColumn, HomePageContainerBottom, HomePageContainerTop, LogOutColumn, Title, TitleName, TitleUserColumn, UserPortrait } from '@/styles/homePage.style';
import { useRouter } from 'expo-router';
import { LogOut, Star } from 'lucide-react-native';
import { useEffect } from 'react';
import { Image, StyleSheet, Platform,View,Text, Touchable, TouchableOpacity } from 'react-native';




export default function HomeScreen() {

  const router = useRouter();

  const handleLogOut = () => {
    supabase.auth.signOut();
    router.replace('/login');
  };

  const handleGetMedicine = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    console.log(user?.id);
    
    if (user) {
      const { data: medicines, error } = await supabase
        .from('medicines')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.log('Error fetching medicines:', error);
      } else {
        console.log('Medicines fetched successfullyy:', medicines.length);
      }
    } else {
      console.log('User is not logged in');
    }
  }

  useEffect(() => {
    handleGetMedicine();
  }, []);

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
        <LogOutColumn>
            <TouchableOpacity onPress={() => {handleLogOut()} }>
                <LogOut size={24} color={Colors.mainColors.redBase} />
            </TouchableOpacity>
        </LogOutColumn>
        
      </HomePageContainerTop>
      <HomePageContainerBottom>
        <HomeContainerBottomColumn>
            
            <HomeButtonCard onPress={() => { router.navigate('/reminder')}} title='Minhas receitas' description='Acompanhe os medicamentos e gerencie lembretes' image='paper' />
            <HomeButtonCard onPress={() => { router.navigate('/form')}} title='Nova receita' description='Cadastre novos lembretes de receitas' image='pills' />

        </HomeContainerBottomColumn>
        <Button onPress={() => {}} backgroundColor={Colors.GrayscaleColors.gray100}>
          <Button.IconButton icon={<Star color={Colors.GrayscaleColors.gray800} style={{width: 24, height: 24}} />} />
          <Button.TextButton name="Avaliar" />
        </Button>
      </HomePageContainerBottom>
    </View>
  );
}

