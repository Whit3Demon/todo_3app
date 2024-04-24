import React, { useState } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BaseInput from "../../components/BaseInput";

const SecondScr = () => {
  const safe = useSafeAreaInsets();
  const [input, setinput] = useState("");

  return (
    <View style={{ marginTop: safe.top, backgroundColor: "red", flex: 1 }}>
      <BaseInput placeholder="Input" value={input} onChangeText={setinput} />
      <BaseInput placeholder="Input" value={input} onChangeText={setinput} />
      <BaseInput placeholder="Input" value={input} onChangeText={setinput} />
      <BaseInput placeholder="Input" value={input} onChangeText={setinput} />
    </View>
  );
};

export default SecondScr;
