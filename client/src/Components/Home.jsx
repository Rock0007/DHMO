import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useUser } from "../Contexts/userContext";

const Home = () => {
  const { user, UserProfile } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await UserProfile();
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        user && (
          <View style={styles.userDetailsContainer}>
            <Text style={styles.userHeading}>User Details</Text>

            <Text style={styles.userData}>Full Name: {user.fullName}</Text>
            <Text style={styles.userData}>
              Phone Number: {user.phoneNumber}
            </Text>
            <Text style={styles.userData}>Aadhar ID: {user.aadharID}</Text>
            <Text style={styles.userData}>Role: {user.role}</Text>
            <Text style={styles.userData}>PHC Name: {user.phcName}</Text>
            <Text style={styles.userData}>Subcenter: {user.subcenterName}</Text>
            <Text style={styles.userData}>Gmail: {user.gmail}</Text>
          </View>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  userDetailsContainer: {
    borderRadius: 10,
    margin: 10,
    padding: 15,
    backgroundColor: "lightgray",
  },
  userHeading: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  userData: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
});

export default Home;
