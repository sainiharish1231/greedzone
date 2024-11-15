import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
const Navicon = ({ icon }: any) => {
  return (
    <View>
      <Image source={icon} />
    </View>
  );
};
const Navbar = () => {
  return (
    <SafeAreaView className="p-4 bg-primary    rounded-b-[40px] ">
      <View className=" flex flex-row justify-between  items-center ">
        <Image
          source={icons.manu}
          tintColor={"white"}
          resizeMode="contain"
          className="w-14 h-14 rotate-180"
        />
        <View className="flex flex-col   rounded-full justify-center items-center">
          <Image
            source={images.apklogo}
            resizeMode="contain"
            className="w-10 h-10"
          />
          <Text className="text-[#ffffff] overflow-hidden font-pbold text-2xl ">
            Greed Zoon
          </Text>
        </View>
        <Image
          source={icons.notification}
          resizeMode="contain"
          tintColor={"white"}
          className="w-10 h-10  "
        />
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
