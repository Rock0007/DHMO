import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import CheckBox from "react-native-check-box";

const PatientEntry = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isCovid19Positive, setIsCovid19Positive] = useState(false);
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted:", {
      firstName,
      lastName,
      age,
      gender,
      isCovid19Positive,
      diagnosis,
      treatment,
      otherInfo,
      phoneNumber,
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.menuIcon}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Patient Entry Form</Text>
        <View style={styles.formContainer}>
          <View style={styles.formRow}>
            <TextInput
              style={styles.nameInput}
              placeholder="First Name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
              style={styles.nameInput}
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <View style={styles.formRow}>
            <TextInput
              style={styles.nameInput}
              placeholder="Age"
              value={age}
              onChangeText={(text) => {
                const sanitizedText = text.replace(/[^0-9]/g, "");
                const trimmedText = sanitizedText.slice(0, 3);
                setAge(trimmedText);
              }}
              keyboardType="numeric"
              maxLength={3}
            />

            <TextInput
              style={styles.nameInput}
              placeholder="Gender"
              value={gender}
              onChangeText={(text) => setGender(text)}
            />
          </View>
          <View style={styles.checkboxPhoneNumberContainer}>
            <CheckBox
              style={{ flex: 1 / 2 }}
              onClick={() => setIsCovid19Positive(!isCovid19Positive)}
              isChecked={isCovid19Positive}
              leftTextStyle={{ fontWeight: "bold" }}
              leftText={"Covid-19 Positive"}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter +91 Phone Number"
            value={phoneNumber}
            onChangeText={(text) => {
              const sanitizedText = text.replace(/[^0-9]/g, "");
              const trimmedText = sanitizedText.slice(0, 10);
              setPhoneNumber(trimmedText);
            }}
            keyboardType="numeric"
            maxLength={10}
          />

          <Text style={styles.sectionHeading}>Diagnosis</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={4}
            placeholder="Enter Diagnosis Details"
            value={diagnosis}
            onChangeText={(text) => setDiagnosis(text)}
          />

          <Text style={styles.sectionHeading}>Treatment</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={4}
            placeholder="Enter Treatment Details"
            value={treatment}
            onChangeText={(text) => setTreatment(text)}
          />

          <Text style={styles.sectionHeading}>Other Information</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={4}
            placeholder="Enter Other Information"
            value={otherInfo}
            onChangeText={(text) => setOtherInfo(text)}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuIcon: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 20,
    maxWidth: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    marginBottom: 30,
    marginTop: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  formContainer: {
    width: "80%",
    paddingVertical: 10,
  },
  formRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "center",
  },
  nameInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  genderPickerContainer: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },

  checkboxPhoneNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },

  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textArea: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    textAlignVertical: "top",
  },

  submitButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  checkboxPhoneNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default PatientEntry;
