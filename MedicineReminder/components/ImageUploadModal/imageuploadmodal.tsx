import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, Button, Alert } from 'react-native';
import { ModalButtonRow, ModalCloseBox, ModalCloseText, ModalContainer, ModalTitle, ModalUploadButtonBox, ModalUploadButtonText, SelectUploadButtonBox, SelectUploadTextBox, UserUploadImage } from './imageuploadmodal.style';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '@/services/supabaseClient';

interface ImageUploadModalProps {
  visible: boolean;
  onClose: () => void;
  onImageUpload?: (image: string) => void;
}

const ImageUploadModal = ({ visible, onClose, onImageUpload }: ImageUploadModalProps) => {


  
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSendImage = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    const randomNumber = Math.floor(Math.random() * 1000);
    
    if (user && image) {

      const { data, error } = await supabase.storage
        .from('user_images')
        .upload(`${user.id}/${randomNumber}.png`, image, {
          cacheControl: '3600',
          upsert: false,
          contentType: 'image/png',
          
        });
      if (error && error.name === 'Duplicate') {
        Alert.alert('Erro ao enviar imagem', 'Esta imagem já existe.');
      } else if (error) {
        Alert.alert('Erro ao enviar imagem', error.message);
      } else {
        const { data: userData, error: error2 } = await supabase
          .from('user_information')
          .update({ user_image: image })
          .eq('user_id', user.id)
          .select('*')
          .single();
  
        if (error2) {
          Alert.alert('Erro ao atualizar imagem', error2.message);
        } else {
          onClose();
        }
      }
    }

   
  };
    
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalTitle>Escolha uma imagem para o perfil</ModalTitle>

        <SelectUploadButtonBox onPress={pickImage}>
          <SelectUploadTextBox>Escolher imagem</SelectUploadTextBox>
        </SelectUploadButtonBox>
        {image && <UserUploadImage source={{ uri: image }} />}

        <ModalButtonRow>

            <ModalUploadButtonBox onPress={handleSendImage} >
                 <ModalUploadButtonText>Enviar Imagem</ModalUploadButtonText>
            </ModalUploadButtonBox>

            <ModalCloseBox onPress={onClose}>
                <ModalCloseText>Fechar</ModalCloseText>
            </ModalCloseBox>

            
        </ModalButtonRow>
        

      </ModalContainer>
    
         
      
    </Modal>
  );
};



export default ImageUploadModal;

