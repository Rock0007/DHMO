import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userDetailsContainer}>
        <View style={styles.header}>
          <MapPinIcon size={25} color="#333" style={styles.locationIcon} />
          <Text style={styles.locationText}>Nalagonda</Text>
        </View>
        <Text style={styles.staticDetail}>Employee Name: </Text>
        <Text style={styles.userDetailText}>Rahul</Text>

        <Text style={styles.staticDetail}>ID: </Text>
        <Text style={styles.userDetailText}>6001</Text>

        <Text style={styles.staticDetail}>PHC: </Text>
        <Text style={styles.userDetailText}>Nalagonda</Text>

        <Text style={styles.staticDetail}>Subcenter: </Text>
        <Text style={styles.userDetailText}>2</Text>

        <Text style={styles.staticDetail}>Role: </Text>
        <Text style={styles.userDetailText}>Anm1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userDetailsContainer: {
    backgroundColor: "#c2e9fb",
    width: Dimensions.get("window").width * 0.8,
    padding: 25,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  locationIcon: {
    marginRight: 5,
    color: "green",
  },
  locationText: {
    fontSize: 16,
  },
  staticDetail: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userDetailText: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default Home;
