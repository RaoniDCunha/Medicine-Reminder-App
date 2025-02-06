import { supabase } from "@/services/supabaseClient";
import { useEffect, useState } from "react";
import { Alert } from "react-native";


interface UserInformationProps {
  user_image: string;
  user_name: string;
}

const useInformation = () => {
  const [userInformation, setUserInformation] = useState<UserInformationProps | null>(null);

  useEffect(() => {
    const fetchUserInformation = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      

      if (user) {
        const { data: userInformations, error } = await supabase
          .from('user_information')
          .select('*')
          .eq('user_id', user.id);

        if (error) {
          Alert.alert('Erro ao buscar informações do usuário');
        } else {
          setUserInformation(userInformations[0]);
        }
      } else {
        Alert.alert('Usuário não está logado');
      }
    };

    fetchUserInformation();
  }, []);

  return userInformation;
};

export default useInformation;
