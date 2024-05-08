import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BaseButton from "../components/BaseButton";
import DoubleCircles from "../components/DoubleCircles";
import { Image } from "expo-image";

const ScreenStart = () => {
  const link = useRouter();

  const safe = useSafeAreaInsets();

  return (
    <ScrollView style={{ backgroundColor: "rgba(241,243,244)" }}>
      <View
        style={{
          marginTop: safe.top,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: safe.bottom + 20,
        }}
      >
        <DoubleCircles />

        <Image
          style={{ width: 254, height: 194, marginBottom: 65, marginTop: 100 }}
          source={require("../assets/images/firstScrrImg.webp")}
          contentFit="cover"
        />
        <Text
          style={{
            fontWeight: "700",
            color: "#000",
            fontSize: 18,
            marginBottom: 16,
          }}
        >
          Gets things with TODs
        </Text>
        <Text style={{ textAlign: "center", width: 203, marginBottom: 130 }}>
          Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
          Consequat urna quam felis interdum quisque. Malesuada adipiscing
          tristique ut eget sed.
        </Text>
        <BaseButton
          title={"Get Started"}
          onPress={() => link.push(`/scr/register`)}
        />
      </View>
    </ScrollView>
  );
};

export default ScreenStart;
