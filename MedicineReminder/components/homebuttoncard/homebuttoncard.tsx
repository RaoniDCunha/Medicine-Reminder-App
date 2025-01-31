import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity } from 'react-native';
import { HomeButtonCardContainer, HomeImageContainer, HomeTextBody, HomeTextContainer, HomeTextTitle } from './homebuttoncard.style';


interface HomeButtonCardProps {
    onPress: () => void;
    title: string;
    description: string;
    image: string
}

const imageMap: { [key: string]: any } = {
    paper: require('../../assets/images/paper.png'),
    pills: require('../../assets/images/pills.png'),
    // Adicione outros mapeamentos de imagens aqui
};


export default function HomeButtonCard({ onPress, title, description, image }: HomeButtonCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
        <HomeButtonCardContainer>
      <HomeImageContainer>
        <Image source={imageMap[image]} style={{ width: 40, height: 40 }} />
      </HomeImageContainer>
      <HomeTextContainer>
        <HomeTextTitle>{title}</HomeTextTitle>
        <HomeTextBody>{description}</HomeTextBody>
      </HomeTextContainer>
    </HomeButtonCardContainer>
    </TouchableOpacity>
    
  );
}


