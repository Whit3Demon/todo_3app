import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

interface BaseinputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: boolean;
  passwordEye?: boolean;
}

const BaseInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error,
  passwordEye,
}: BaseinputProps) => {
  const [secureText, setSecurityText] = useState(
    secureTextEntry ? secureTextEntry : false
  );

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        secureTextEntry={secureText}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{
          borderRadius: 100,
          paddingHorizontal: 25,
          paddingVertical: 15,
          marginHorizontal: 25,
          backgroundColor: error ? "rgba(255,0,0, 0.4)" : "#fff",
          fontSize: 13,
        }}
        placeholderTextColor={"rgba(0,0,0,0.8)"}
      />
      {passwordEye && (
        <TouchableOpacity
          onPress={() => setSecurityText(!secureText)}
          style={{
            height: "100%",
            width: 50,

            position: "absolute",
            right: 25,
            borderTopEndRadius: 100,
            borderBottomEndRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather
            name={secureText ? "eye" : "eye-off"}
            size={30}
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BaseInput;
