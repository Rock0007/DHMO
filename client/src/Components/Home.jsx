import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import {
  MapPinIcon,
  UserCircleIcon,
  IdentificationIcon,
  HomeIcon,
  BuildingLibraryIcon,
  ChevronDoubleRightIcon,
} from "react-native-heroicons/outline";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userDetailsContainer}>
        <View style={styles.header}>
          <MapPinIcon size={25} color="green" style={styles.icon} />
          <Text style={styles.headerText}>Location: Nalagonda</Text>
        </View>

        <View style={styles.detailRow}>
          <UserCircleIcon size={25} color="#333" style={styles.icon} />
          <Text style={styles.detailTitle}>Employee Name:</Text>
          <Text style={styles.detailText}>Rahul</Text>
        </View>
        <View style={styles.detailRow}>
          <IdentificationIcon size={25} color="#333" style={styles.icon} />
          <Text style={styles.detailTitle}>ID:</Text>
          <Text style={styles.detailText}>6001</Text>
        </View>
        <View style={styles.detailRow}>
          <BuildingLibraryIcon size={25} color="#333" style={styles.icon} />
          <Text style={styles.detailTitle}>PHC:</Text>
          <Text style={styles.detailText}>Nalagonda</Text>
        </View>
        <View style={styles.detailRow}>
          <HomeIcon size={25} color="#333" style={styles.icon} />
          <Text style={styles.detailTitle}>Subcenter:</Text>
          <Text style={styles.detailText}>2</Text>
        </View>
        <View style={styles.detailRow}>
          <ChevronDoubleRightIcon size={25} color="#333" style={styles.icon} />
          <Text style={styles.detailTitle}>Role:</Text>
          <Text style={styles.detailText}>Anm1</Text>
        </View>
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
    elevation: 3, // Add elevation for shadow
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 10 }, // Shadow offset
    shadowOpacity: 0.19, // Shadow opacity
    shadowRadius: 20, // Shadow radius
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "normal",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  detailTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 5,
  },
  detailText: {
    fontSize: 23,
  },
});

export default Home;
