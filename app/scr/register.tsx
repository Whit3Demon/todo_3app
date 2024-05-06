import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BaseInput from "../../components/BaseInput";
import { useRouter } from "expo-router";
import BaseButton from "../../components/BaseButton";
import DoubleCircles from "../../components/DoubleCircles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const scheme = z.object({
  name: z.string().min(1, "я ошибка имени"),
  email: z.string().min(2, "enter value").email(),
  password: z.string().min(1, "пароль должен содрежать мнимум 1 символ"),
  repassword: z.string().min(1, "enter value"),
});

const SecondScr = () => {
  const safe = useSafeAreaInsets();
  const link = useRouter();

  const {
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof scheme>>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(scheme),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
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
        Welcome to Onboard!
      </Text>
      <Text style={{ textAlign: "center", width: 203, marginBottom: 90 }}>
        Let’s help to meet up your tasks.
      </Text>
      <View style={{ gap: 30, marginBottom: 73, width: "100%" }}>
        <BaseInput
          placeholder="Enter your full name"
          value={watch("name")}
          onChangeText={(value) =>
            setValue("name", value, { shouldValidate: true })
          }
          error={!!errors.name?.message}
        />
        <BaseInput
          placeholder="Enter your Email"
          value={watch("email")}
          onChangeText={(value) =>
            setValue("email", value, { shouldValidate: true })
          }
          error={!!errors.email?.message}
        />
        <BaseInput
          secureTextEntry
          placeholder="Enter Password"
          value={watch("password")}
          onChangeText={(value) =>
            setValue("password", value, { shouldValidate: true })
          }
          error={!!errors.password?.message}
        />

        <BaseInput
          secureTextEntry
          placeholder="Confirm password"
          value={watch("repassword")}
          onChangeText={(value) =>
            setValue("repassword", value, { shouldValidate: true })
          }
          error={getValues("password") != getValues("repassword")}
          passwordEye
        />
      </View>
      <BaseButton
        title={"Register"}
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
        <Text style={{ fontSize: 18 }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => link.push(`/scr/login`)}>
          <Text
            style={{
              color: "#50C2C9",
              fontSize: 18,
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecondScr;
