import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import DoubleCircles from "../../components/DoubleCircles";
import { Entypo, EvilIcons, Ionicons } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

import * as ImagePicker from "expo-image-picker";

import { Clock, ClockThemes } from "react-native-clocks";

type TodoListType = {
  isActive: boolean;
  value: string;
};

const SecondScr = () => {
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

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  const [expressions, setExpressions] = useState<TodoListType[]>([]);
  const [currentExpression, setCurrentExpression] = useState("");

  const handleAddExpression = () => {
    currentExpression.length > 0 &&
      setExpressions([
        ...expressions,
        { isActive: false, value: currentExpression },
      ]);
    setCurrentExpression("");
  };

  const handleToggleStatusExpressions = (index: number) => {
    const newExpressions = [...expressions];
    newExpressions[index].isActive = !newExpressions[index].isActive;
    setExpressions(newExpressions);
  };

  const removeExpression = (index: number) => {
    const newExpressions = [...expressions];
    newExpressions.splice(index, 1);
    setExpressions(newExpressions);
  };

  const leftSwipe = (index: number) => {
    return (
      <TouchableOpacity
        style={{ width: 30, height: 20 }}
        onPress={() => removeExpression(index)}
      >
        <EvilIcons name="trash" size={20} color="red" />
      </TouchableOpacity>
    );
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: TodoListType;
    index: number;
  }) => (
    <Swipeable renderRightActions={() => leftSwipe(index)}>
      <TouchableOpacity
        key={index}
        style={{ flexDirection: "row", alignItems: "center", gap: 9 }}
        onPress={() => handleToggleStatusExpressions(index)}
      >
        <View
          style={{
            width: 17,
            aspectRatio: 1,
            borderWidth: 2,
            borderColor: "black",
            backgroundColor: item.isActive ? "#50C2C9" : "white",
          }}
        />
        <Text
          style={{
            color: "rgba(0,0,0,0.7)",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          {item.value}
        </Text>
      </TouchableOpacity>
    </Swipeable>
  );

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#50C2C9",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{
              borderRadius: 100,
              backgroundColor: "pink",
              marginTop: 90,
              width: 100,
              height: 100,
            }}
          />
        ) : (
          <View
            style={{
              borderRadius: 100,
              backgroundColor: "pink",
              marginTop: 90,
              width: 100,
              height: 100,
            }}
          />
        )}
      </TouchableOpacity>
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
            alignSelf: "center",
            position: "relative",
          }}
        >
          <View
            style={{
              width: 120,
              height: 120,
              position: "absolute",
              top: -70,
              left: -30,
            }}
          >
            <Clock theme={ClockThemes.Default} scale={0.4} />
          </View>
        </View>

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
              value={currentExpression}
              placeholder="Daily Task"
              onChangeText={setCurrentExpression}
            />
            <TouchableOpacity onPress={handleAddExpression}>
              <Entypo
                name="plus"
                size={30}
                color="#50C2C9"
                style={{ position: "absolute", right: 0, top: 0 }}
              />
            </TouchableOpacity>
          </View>
          {expressions.length > 0 ? (
            <FlatList
              data={expressions}
              renderItem={renderItem}
              contentContainerStyle={{ gap: 6 }}
              style={{ marginTop: 10 }}
            />
          ) : (
            <Text
              style={{
                fontSize: 16,
                marginTop: 15,
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              Enter your first note!
            </Text>
          )}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default SecondScr;
