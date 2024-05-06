import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BaseInput from "../../components/BaseInput";
import { useRouter } from "expo-router";
import BaseButton from "../../components/BaseButton";
import DoubleCircles from "../../components/DoubleCircles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Image } from "expo-image";

const scheme = z.object({
  email: z.string().min(2, "enter value").email(),
  password: z.string().min(1, "enter value"),
});

const SecondScr = () => {
  const safe = useSafeAreaInsets();
  const link = useRouter();

  const {
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof scheme>>({
    mode: "onChange",
    reValidateMode: "onChange",
    // resolver: zodResolver(scheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <View
      style={{
        marginTop: safe.top,
        flex: 1,
        backgroundColor: "rgba(241,243,244, 1)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DoubleCircles />
      <Text
        style={{
          fontWeight: "700",
          color: "#000",
          fontSize: 18,
          marginBottom: 31,
        }}
      >
        Welcome back
      </Text>
      <Image
        style={{ width: 185, height: 138, marginBottom: 65, marginTop: 53 }}
        source={require("../../assets/images/loginImg.png")}
        contentFit="cover"
      />

      <View style={{ gap: 30, width: "100%" }}>
        <BaseInput
          placeholder="Enter your Email"
          value={watch("email")}
          onChangeText={(value) => setValue("email", value)}
        />
        <BaseInput
          secureTextEntry
          placeholder="Enter Password"
          value={watch("password")}
          onChangeText={(value) => setValue("password", value)}
        />
      </View>
      <TouchableOpacity onPress={() => link.back()}>
        <Text
          style={{
            color: "#50C2C9",
            fontSize: 13,
            marginVertical: 50,
          }}
        >
          Forget password?
        </Text>
      </TouchableOpacity>
      <BaseButton
        title={"Login"}
        onPress={() => {
          handleSubmit((data) => {
            link.push(`/scr/login`);
          })();
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 19,
        }}
      >
        <Text style={{ fontSize: 18 }}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => link.push(`/scr/main`)}>
          <Text
            style={{
              color: "#50C2C9",

              fontSize: 18,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecondScr;
