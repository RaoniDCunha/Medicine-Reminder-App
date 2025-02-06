import Button from '@/components/button/button';
import HomeButtonCard from '@/components/homebuttoncard/homebuttoncard';
import { HomeButtonCardContainer } from '@/components/homebuttoncard/homebuttoncard.style';
import ImageUploadModal from '@/components/ImageUploadModal/imageuploadmodal';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import useInformation from '@/hooks/useInformation';
import { supabase } from '@/services/supabaseClient';
import { HomeContainerBottomColumn, HomePageContainerBottom, HomePageContainerTop, LogOutColumn, Title, TitleName, TitleUserColumn, UserImage, UserPortrait } from '@/styles/homePage.style';
import { useRouter } from 'expo-router';
import { LogOut, Star } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform,View,Text, Touchable, TouchableOpacity, Alert } from 'react-native';


interface UserInformationProps {
  user_image: string;
  user_name: string;
}



export default function HomeScreen() {

  const router = useRouter();

  const [openImageUploadModal, setOpenImageUploadModal] = useState<boolean>(false);

  const handleLogOut = () => {
    supabase.auth.signOut();
    router.replace('/login');
  };
  
  const userInformation = useInformation();
  

  const handleUploadImage = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    const userUploadImage = require('../../assets/images/logo.png');

    if (user) {
      const { data, error: uploadError } = await supabase.storage
        .from('user_images')
        .upload(`${user.id}/${user.id}.png`, userUploadImage, {
          upsert: true,
        });

      if (uploadError) {
        console.log('Error uploading image:', uploadError);
      } else {
        console.log('Image uploaded successfully:', data);
      }
  };

  }





  return (
    <View style={{ flex: 1 }}>
      <HomePageContainerTop>
        <TitleUserColumn>
          <TitleUserColumn>
            <View style={{flexDirection: 'row',justifyContent: 'space-between' ,alignItems: 'flex-start',width: '100%'}}>
              <TouchableOpacity onPress={() => setOpenImageUploadModal(true)}>
                <UserPortrait>
                  <UserImage source={{uri: userInformation?.user_image}} style={{borderRadius: 50}} />
                </UserPortrait>
              </TouchableOpacity>
              
              <LogOutColumn>
                <TouchableOpacity onPress={() => {handleLogOut()} }>
                  <LogOut size={24} color={Colors.mainColors.redBase} />
                </TouchableOpacity>
              </LogOutColumn>

            </View>
            <Title>Boas Vindas</Title>
            <TitleName>{userInformation?.user_name}</TitleName>
          </TitleUserColumn>
        </TitleUserColumn>
        
        
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
      <ImageUploadModal visible={openImageUploadModal} onClose={() => setOpenImageUploadModal(false)}  />
    </View>

    
  );
}

