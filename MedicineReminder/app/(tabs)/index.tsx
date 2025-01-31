// app/(tabs)/index.tsx
import { Redirect } from 'expo-router';

// Redireciona para a primeira aba (ex: "home")
export default function Index() {
  return <Redirect href="/(tabs)/login" />;
}