import MedicineCard from '@/components/medicinecard/medicinecard';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { supabase } from '@/services/supabaseClient';

import { ReminderContainerBottomColumn, ReminderContainerTopColumn, ReminderDescription, ReminderPageContainerBottom, ReminderPageContainerTop, ReminderTitleName } from '@/styles/reminderPage.style';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity, FlatList } from 'react-native';


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
        console.log('Error fetching medicines:', error);
      } else if (medicines) {
        setMedicine(medicines);
        console.log('Medicines fetched successfully:', medicines.length);
      }
    } else {
      console.log('User is not logged in');
    }
  }

  const handleSendMedicine = async () => {

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      const { data: medicines, error } = await supabase
        .from('medicines')
        .insert([
          { title: 'Paracetamol', ocorrency: '3 vezes ao dia', hour: '08:00' },
          { title: 'Dipirona', ocorrency: '2 vezes ao dia', hour: '12:00' },
          { title: 'Ibuprofeno', ocorrency: '1 vez ao dia', hour: '20:00' },
        ])
        .select('id, title, ocorrency, hour, user_id, created_at')
        .single();

      if (error) {
        console.log('Error inserting medicines:', error);
      } else {
        console.log('Medicines inserted successfully:', medicines);
      }
    } else {
      console.log('User is not logged in');
    }

  }


  useEffect(() => {
    handleGetMedicine();
    console.log('primeiro:', medicine[0]);
  }, []);

  const router = useRouter();

  const renderMedicine = ({ item }: { item: MedicineProps }) => {
    return (
      <MedicineCard
        onPress={() => {}}
        title={item.title}
        ocorrency={item.ocorrency}
        time={item.hour}
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

