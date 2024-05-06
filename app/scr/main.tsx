import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import DoubleCircles from "../../components/DoubleCircles";
import { Image } from "expo-image";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const SecondScr = () => {
  const safe = useSafeAreaInsets();
  const link = useRouter();

  const getCurrentTimeOfDay = (): string => {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
      return "Доброе утро";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Добрый день";
    } else if (currentTime >= 18 && currentTime < 24) {
      return "Добрый вечер";
    } else {
      return "Доброй ночи,";
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#50C2C9",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderRadius: 100,
          backgroundColor: "pink",
          marginTop: 90,
          width: 100,
          height: 100,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: "white",
          marginTop: 16,
        }}
      >
        Welcome Jeegar goyani
      </Text>
      <DoubleCircles />
      <View
        style={{
          backgroundColor: "rgba(241,243,244, 1)",
          height: 500,
          width: "100%",
          bottom: 0,
          position: "absolute",
          paddingHorizontal: 25,
          paddingTop: 25,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 12, textAlign: "right" }}>
          {getCurrentTimeOfDay()}
        </Text>

        <View
          style={{
            width: 120,
            height: 120,
            backgroundColor: "black",
            borderRadius: 100,
            marginTop: 5,
            alignSelf: "center",
          }}
        />

        <Text style={{ fontWeight: "700", fontSize: 14 }}>Task list</Text>

        <View
          style={{
            width: "100%",
            aspectRatio: 1.2,
            borderRadius: 12,
            marginTop: 35,
            paddingHorizontal: 25,
            paddingVertical: 20,
            backgroundColor: "#fff",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={{
                width: "100%",
                fontSize: 12,
                fontWeight: "700",
                paddingRight: 35,
              }}
              placeholder="Daily Task"
            />
            <TouchableOpacity>
              <Entypo
                name="plus"
                size={30}
                color="#50C2C9"
                style={{ position: "absolute", right: 0, top: 0 }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={{ marginTop: 50 }}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 9 }}
            >
              <View
                style={{
                  width: 17,
                  aspectRatio: 1,
                  borderWidth: 2,
                  borderColor: "black",
                  backgroundColor: true ? "#50C2C9" : "white",
                }}
              />
              <Text
                style={{
                  color: "rgba(0,0,0,0.7)",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                Learning Programming by 12PM
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SecondScr;
