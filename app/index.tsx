import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const ScreenStart = () => {
  const link = useRouter();

  return (
    <View style={{ marginHorizontal: "auto", marginTop: 40 }}>
      <Text>StartScreen</Text>
      <Button onPress={() => link.push(`/scr/example`)} title="sds" />
    </View>
  );
};

export default ScreenStart;
