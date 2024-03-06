import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useUser } from "../Contexts/userContext";
import { signup as authApiLogin } from "../Api/authAPI";

const StaffRegistration = ({ navigation }) => {
  const { signup } = useUser();
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aadharID, setAadharID] = useState("");
  const [role, setRole] = useState("");
  const [phcName, setPHCName] = useState("");
  const [phcID, setPHCID] = useState("");
  const [subcenterName, setSubcenterName] = useState("");
  const [subcenterID, setSubcenterID] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    try {
      // Validation checks
      if (
        !fullName ||
        !age ||
        !gender ||
        !phoneNumber ||
        !aadharID ||
        !role ||
        !phcName ||
        !phcID ||
        !subcenterName ||
        !subcenterID ||
        !gmail ||
        !password ||
        !confirmPassword
      ) {
        ToastAndroid.show("All fields must be filled", ToastAndroid.SHORT);
        return;
      }

      const formData = {
        fullName,
        age,
        gender,
        phoneNumber,
        aadharID,
        role,
        phcName,
        phcID,
        subcenterName,
        subcenterID,
        gmail,
        password,
        confirmPassword,
      };

      await authApiLogin(formData);
      ToastAndroid.show(
        "Staff member registered successfully",
        ToastAndroid.SHORT
      );
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      ToastAndroid.show(
        "Registration failed. Please try again.",
        ToastAndroid.SHORT
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Staff Registration</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Full Name"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
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
          <View style={styles.formRow}>
            <TextInput
              style={styles.inlineInput}
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
            <TextInput
              style={styles.inlineInput}
              placeholder="Enter Aadhar ID"
              value={aadharID}
              onChangeText={(text) => setAadharID(text)}
              keyboardType="numeric"
              maxLength={12}
            />
          </View>

          <View style={styles.formRow}>
            <Picker
              style={styles.picker}
              selectedValue={role}
              onValueChange={(itemValue) => setRole(itemValue)}
            >
              <Picker.Item label="Select Role" value="" />
              <Picker.Item label="ANM1" value="ANM1" />
              <Picker.Item label="ANM2" value="ANM2" />
              <Picker.Item label="ANM3" value="ANM3" />
              <Picker.Item label="ANM4" value="ANM4" />
              <Picker.Item label="Staff" value="Staff" />
            </Picker>
          </View>

          <View style={styles.formRow}>
            <TextInput
              style={styles.inlineInput}
              placeholder="Enter PHC Name"
              value={phcName}
              onChangeText={(text) => setPHCName(text)}
            />
            <TextInput
              style={styles.inlineInput}
              placeholder="Enter PHC ID"
              value={phcID}
              onChangeText={(text) => setPHCID(text)}
            />
          </View>

          <View style={styles.formRow}>
            <TextInput
              style={styles.inlineInput}
              placeholder="Enter Subcenter Name"
              value={subcenterName}
              onChangeText={(text) => setSubcenterName(text)}
            />
            <TextInput
              style={styles.inlineInput}
              placeholder="Enter Subcenter ID"
              value={subcenterID}
              onChangeText={(text) => setSubcenterID(text)}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Enter Gmail"
            value={gmail}
            onChangeText={(text) => setGmail(text)}
          />

          <View style={styles.formRow}>
            <TextInput
              style={styles.inlineInput}
              placeholder="Enter Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              style={styles.inlineInput}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>

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
    marginRight: 10,
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
    marginRight: 10,
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
  formRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "center",
  },
  inlineInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
  picker: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
  },
});

export default StaffRegistration;
