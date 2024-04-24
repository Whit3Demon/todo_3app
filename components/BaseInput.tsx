import React from "react";
import { TextInput, View } from "react-native";

interface BaseinputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const BaseInput = ({ placeholder, value, onChangeText }: BaseinputProps) => {
  return (
    <View style={{ width: "100%" }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{
          borderRadius: 100,
          paddingHorizontal: 25,
          paddingVertical: 15,
          marginHorizontal: 25,
          backgroundColor: "#fff",

          fontSize: 13,
        }}
        placeholderTextColor={"rgba(0,0,0,0.8)"}
      />
    </View>
  );
};

export default BaseInput;
