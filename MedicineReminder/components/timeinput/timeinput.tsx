import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { LoginPageContainerBottom, LoginPageContainerTop, Title } from '@/styles/loginPage.style';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { TextTimeInput, TextTimeInputBox, TimeInputContainer, TimeInputTitle } from './timeinput.style';

interface TimeInputProps {
  inputTitle: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  type?: string;
}

export default function TimeInput({ inputTitle, placeholder, onChangeText, type }: TimeInputProps) {
  const formatTime = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    const formattedTime = cleaned.replace(/^(\d{0,2})(\d{0,2})/, (_, h, m) => {
      if (!h) return '';
      if (h.length === 1) h = `0${h}`;
      if (!m) return `${h}:00`;
      return `${h}:${m}`;
    });
    return formattedTime;
  };

  const handleTextChange = (text: string) => {
    const formattedText = formatTime(text);
    onChangeText(formattedText);
  };

  return (
    <TimeInputContainer>
      <TimeInputTitle>{inputTitle}</TimeInputTitle>
      <TextTimeInputBox>
        <TextTimeInput
          placeholder={placeholder}
          onChangeText={handleTextChange}
          type={type}
          keyboardType="numeric"
          maxLength={5}
        />
      </TextTimeInputBox>
    </TimeInputContainer>
  );
}

