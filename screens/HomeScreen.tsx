// app/home.tsx
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { Icon } from "@rneui/themed";

export default function HomeScreen() {
  const handlePress = (route: string) => {
    try {
      router.push(route);
    } catch (error) {
      console.error(`Failed to navigate to ${route}`, error);
    }
  };
  const handleImagePress = () => {
    Linking.openURL("https://t.me/TheExcellentEarning");
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/736x/f4/05/4c/f4054c454c1d3dfb32a56a37bf16c4ca.jpg",
          }}
          style={styles.background}
        >
          <TouchableOpacity onPress={handleImagePress} style={styles.banner}>
            <Image
              source={require("../assets/images/win_banner.jpg")}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 25,
              fontWeight: 900,
              marginTop: 10,
              color: "darkblue",
            }}
          >
            Welcome to Excellent Hacks
          </Text>
          <View style={styles.imageWrap}>
            <View style={styles.imgContainer}>
              <Pressable onPress={() => handlePress("/tcLottery")}>
                <Image
                  source={{
                    uri: "https://play-lh.googleusercontent.com/3GWFLZYCm1eFjN2U8BibHBGYagNtXlYEkA-a1Vl_ERADUw1ApSdfktsNSuviVay8b08",
                  }}
                  style={styles.image}
                />
              </Pressable>
            </View>
            <View style={styles.imgContainer}>
              <Pressable onPress={() => handlePress("/bigdaddy")}>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jO0hO6Hw_rP3fwpIz3t0-3vycrV16LI8ur_iUeC_e7JO0fQA3Zl83d8L9pMNasgE0Ko&usqp=CAU",
                  }}
                  style={styles.image}
                />
              </Pressable>
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://99clubs.com/wp-content/themes/99clubs/images/logo-99clubs.png",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.imgContainer}>
              <Pressable onPress={() => handlePress("/club55")}>
                <Image
                  source={{
                    uri: "https://play-lh.googleusercontent.com/TvcahFACDBV9fGw8xgl_o0HdsA8jM7_aTMvd_Hz3Ta0zmztvHyeLwxuEyaqO538yz0Y",
                  }}
                  style={styles.image}
                />
              </Pressable>
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://static6.tgstat.ru/channels/_0/c3/c31ad3cdda5461a8e09fc1f5872795ac.jpg",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://ok-win.org/wp-content/uploads/2024/05/Ok.png",
                }}
                style={styles.image}
              />
            </View>
          </View>
          <Button
            icon={() => <Icon name="logout" size={20} color="white" />}
            mode="contained"
            onPress={() => handlePress("/login")}
            labelStyle={{ fontSize: 18 }}
          >
            Logout
          </Button>
        </ImageBackground>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  banner: {
    width: "95%",
    height: 160,
    marginTop: 80,
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  glassContainer: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30, // iPhone-like rounded corners
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    overflow: "hidden", // Ensure content respects rounded corners
  },
  imageWrap: {
    display: "flex",
    marginTop: 30,
    flexDirection: "row",
    gap: 30,
    flexWrap: "wrap",
    marginBottom: 25,
    justifyContent: "center",
  },
  imgContainer: {
    padding: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  image: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20, // iPhone-like rounded corners
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    overflow: "hidden", // Ensure content respects rounded corners
  },
});
