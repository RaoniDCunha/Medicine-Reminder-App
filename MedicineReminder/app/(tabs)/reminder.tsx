import MedicineCard from '@/components/medicinecard/medicinecard';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { supabase } from '@/services/supabaseClient';

import { ReminderContainerBottomColumn, ReminderContainerTopColumn, ReminderDescription, ReminderPageContainerBottom, ReminderPageContainerTop, ReminderTitleName } from '@/styles/reminderPage.style';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity, FlatList, Alert } from 'react-native';


interface MedicineProps {
  created_at: string;
  hour: string;
  id: number;
  ocorrency: string;
  title: string;
  user_id: string;
}

export default function ReminderScreen() {

  const [medicine, setMedicine] = useState<MedicineProps[]>([]);

  const handleGetMedicine = async () => {
    const { data: { user } } = await supabase.auth.getUser();
  
    if (user) {
      const { data: medicines, error } = await supabase
        .from('medicines')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      
      if (error) {
        Alert.alert('Erro ao buscar medicamentos');
      } else if (medicines) {
        setMedicine(medicines);
      }
    } else {
      Alert.alert('Usuário não está logado');
    }
  }


  const handleDeleteMedicine = async (id: number) => {
    const { error } = await supabase
      .from('medicines')
      .delete()
      .eq('id', id);
  
    if (error) {
      Alert.alert('Erro ao deletar medicamento');
      return; 
    }
    
    Alert.alert('Medicamento deletado com sucesso');
    handleGetMedicine();
  };

  useEffect(() => {
    handleGetMedicine();
  }, []);

  const router = useRouter();

  const renderMedicine = ({ item }: { item: MedicineProps }) => {
    return (
      <MedicineCard
        title={item.title}
        ocorrency={item.ocorrency}
        time={item.hour}
        onPress={() => handleDeleteMedicine(item.id)}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ReminderPageContainerTop>
        <ReminderContainerTopColumn>
          <TouchableOpacity onPress={() => { router.back()}}>
            <ArrowLeft size={24} color={Colors.GrayscaleColors.gray100} />
          </TouchableOpacity>
          <ReminderTitleName>Minhas receitas</ReminderTitleName>
          <ReminderDescription>Acompanhe seus medicamentos cadastrados e gerencie lembretes</ReminderDescription>
        </ReminderContainerTopColumn>
      </ReminderPageContainerTop>
      <ReminderPageContainerBottom>
        <ReminderContainerBottomColumn>
          <FlatList data={medicine} renderItem={renderMedicine}  />
        </ReminderContainerBottomColumn>
      </ReminderPageContainerBottom>
    </View>
  );
}

