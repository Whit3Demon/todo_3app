import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

interface BaseButtonProps {
  title: string;
  onPress: () => void;
}

const BaseButton = ({ title, onPress }: BaseButtonProps) => {
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderRadius: 8,
          backgroundColor: "#50C2C9",
          paddingVertical: 16,
          marginHorizontal: 25,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            color: "#fff",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BaseButton;
