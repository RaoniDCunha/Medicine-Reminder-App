import Button from '@/components/button/button';
import Input from '@/components/input/input';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { FormContainerBottomColumn, FormContainerTopColumn, FormDescription, FormPageContainerBottom, FormPageContainerTop, FormTitleName } from '@/styles/formPage.style';
import { useRouter } from 'expo-router';
import { ArrowLeft, Plus } from 'lucide-react-native';
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity } from 'react-native';




export default function FormScreen() {

   const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <FormPageContainerTop>
        <FormContainerTopColumn>
          <TouchableOpacity onPress={() => { router.back()}}>
            <ArrowLeft size={24} color={Colors.GrayscaleColors.gray100} />
          </TouchableOpacity>
          <FormTitleName>Nova receita</FormTitleName>
          <FormDescription>Adicione a sua prescrição médica para receber lembretes de quando tomar seu medicamento</FormDescription>
        </FormContainerTopColumn>
      </FormPageContainerTop>
      <FormPageContainerBottom>
        <FormContainerBottomColumn>
          <Input inputTitle="Remédio" placeholder="Nome do Medicamento" onChangeText={() => {}}/>
          <Input inputTitle="Horário" placeholder="00:00" onChangeText={() => {}}  />
          <Input inputTitle="Recorrência" placeholder="Selecione" onChangeText={() => {}}/>
        </FormContainerBottomColumn>
        <Button onPress={() => { }} backgroundColor={Colors.mainColors.redBase}>
            <Button.IconButton icon={<Plus color={Colors.GrayscaleColors.gray800 } style={{ width: 24, height: 24 }} />} />
            <Button.TextButton name="Entrar" />
        </Button>
      </FormPageContainerBottom>
    </View>
  );
}

