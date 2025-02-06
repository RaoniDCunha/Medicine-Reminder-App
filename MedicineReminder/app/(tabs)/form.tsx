import Button from '@/components/button/button';
import CheckBox from '@/components/checkbox/checkbox';
import Input from '@/components/input/input';
import TimeInput from '@/components/timeinput/timeinput';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { supabase } from '@/services/supabaseClient';
import { FormContainerBottomColumn, FormContainerTopColumn, FormDescription, FormPageContainerBottom, FormPageContainerTop, FormTitleName } from '@/styles/formPage.style';
import { useRouter } from 'expo-router';
import { ArrowLeft, Plus } from 'lucide-react-native';
import { useState } from 'react';
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity, Alert } from 'react-native';


interface MedicineProps {
  created_at: string;
  hour: string;
  id: number;
  ocorrency: string;
  title: string;
  user_id: string;
}



export default function FormScreen() {

   const router = useRouter();

   const [medicine, setMedicine] = useState<string>('');
   const [time, setTime] = useState<string>('');
   const [recurrence, setRecurrence] = useState<string>('');
   const [isChecked, setIsChecked] = useState<boolean>(false);

  
   const handleAddMedicine = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if(isChecked) {
      setTime(Date.now().toString());
    }

    if (user && medicine && time && recurrence) {
      const { data: medicines, error } = await supabase
        .from('medicines')
        .insert([
          { title: medicine, hour: time, ocorrency: recurrence, user_id: user.id },
        ])
        .select('id, title, hour, ocorrency, user_id, created_at')
        .single();
  
      if (error) {
        Alert.alert('Erro ao inserir medicamento');
      } else {
        console.log('Medicines inserted successfully:', medicines);
        router.replace('/reminder');
      }
    } else {
      Alert.alert('Preencha todos os campos');
    }
  }
   
   


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
          <Input inputTitle="Remédio" placeholder="Nome do Medicamento" onChangeText={setMedicine}  />
          <Input inputTitle="Horário" placeholder="00:00" onChangeText={setTime}  />
          <Input inputTitle="Recorrência" placeholder="Selecione" onChangeText={setRecurrence}  />
          <CheckBox boxTitle="Tomar Agora" onClick={() => { setIsChecked(!isChecked) }} isChecked={isChecked} />
        </FormContainerBottomColumn>
        <Button onPress={() => { handleAddMedicine() }} backgroundColor={Colors.mainColors.redBase}>
            <Button.IconButton icon={<Plus color={Colors.GrayscaleColors.gray800 } style={{ width: 24, height: 24 }} />} />
            <Button.TextButton name="Adicionar" />
        </Button>
      </FormPageContainerBottom>
    </View>
  );
}


