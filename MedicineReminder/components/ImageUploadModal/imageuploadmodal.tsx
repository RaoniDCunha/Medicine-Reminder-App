import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ModalButtonRow, ModalCloseBox, ModalCloseText, ModalContainer, ModalTitle, ModalUploadButtonBox, ModalUploadButtonText } from './imageuploadmodal.style';

interface ImageUploadModalProps {
  visible: boolean;
  onClose: () => void;
  onImageUpload?: (image: string) => void;
}

const ImageUploadModal = ({ visible, onClose, onImageUpload }: ImageUploadModalProps) => {
  

  
    
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalTitle>Escolha uma imagem para o perfil</ModalTitle>

        <ModalButtonRow>

            <ModalUploadButtonBox >
                 <ModalUploadButtonText>Escolher imagem</ModalUploadButtonText>
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

