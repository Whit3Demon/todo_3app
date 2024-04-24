import React from "react";
import { View } from "react-native";

const DoubleCircles = () => {
  return (
    <>
      <View
        style={{
          width: 200,
          aspectRatio: 1,
          backgroundColor: "rgba(143, 225, 215, 0.5)",
          borderRadius: 100,
          position: "absolute",
          top: -100,
          left: 0,
        }}
      />
      <View
        style={{
          width: 200,
          aspectRatio: 1,
          backgroundColor: "rgba(143, 225, 215, 0.5)",
          borderRadius: 100,
          position: "absolute",
          top: -17,
          left: -100,
        }}
      />
    </>
  );
};

export default DoubleCircles;
