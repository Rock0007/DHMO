import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const PatientLogs = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy patient data (replace this with your actual data)
  const patients = [
    {
      name: "John Doe",
      age: 30,
      mobileNumber: "9876543210",
    },
    {
      name: "Jane Smith",
      age: 25,
      mobileNumber: "9876543210",
    },
  ];

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.aadharId.includes(searchQuery.replace(/\s/g, ""))
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MagnifyingGlassIcon style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search by name or Aadhar ID"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>

      {/* Patient Cards */}
      <View style={styles.patientCardsContainer}>
        {filteredPatients.map((patient, index) => (
          <TouchableOpacity
            key={index}
            style={styles.patientCard}
            onPress={() => console.log("Navigate to patient detail screen")}
          >
            <Text style={styles.patientName}>{patient.name}</Text>
            <Text>Age: {patient.age}</Text>
            <Text>Mobile Number: {patient.mobileNumber}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 0,
  },
  searchIcon: {
    marginRight: 10,
    color: "#777",
  },
  searchBar: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontWeight: "bold",
  },
  patientCardsContainer: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  patientCard: {
    width: "48%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "white",
  },
  patientName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default PatientLogs;
