import { View, Text, TextInput, Button, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Signup = () => {
  return (
    <View>
      <View
        style={{
          // backgroundColor: "red",
          height: "25%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: "60%",
            width: "30%",
            backgroundColor: "orange",
            borderRadius: 60,
            alignItems: "center",
            justifyContent: "center",
            // marginTop: 50,
            // marginRight: 50,
          }}
        >
          <Ionicons name="person" size={100} />
        </View>
      </View>
      <View style={{ height: "60%", width: "100%" }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            margin: 10,
          }}
        >
          <TextInput placeholder="First Name" />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            margin: 10,
          }}
        >
          <TextInput placeholder="Last Name" />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            margin: 10,
          }}
        >
          <TextInput placeholder="Email" />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            margin: 10,
          }}
        >
          <TextInput placeholder="Password" />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            margin: 10,
          }}
        >
          <TextInput placeholder="Confirm Password" />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            margin: 10,
          }}
        >
          <TextInput placeholder="DOB" />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            margin: 10,
          }}
        >
          <TextInput placeholder="Gender" />
        </View>
      </View>
      <View
        style={{
          height: "20%",
          width: "100%",
          //alignItems: "center",
          //justifyContent: "center",
        }}
      >
        <View>
          <Pressable
            style={{
              margin: 20,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                alignSelf: "center",
                justifyContent: "center",
                backgroundColor: "purple",
                marginEnd: 10,
                borderWidth: 2,
                padding: 20,
                margin: 10,
              }}
            >
              Signup
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Signup;
