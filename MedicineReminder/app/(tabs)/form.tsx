import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Image, StyleSheet, Platform,View,Text } from 'react-native';




export default function FormScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontFamily: Fonts.heading.fontFamily, fontSize: Fonts.heading.size, lineHeight: Fonts.heading.lineHeight, color: Colors.mainColors.redBase }}>ddd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
