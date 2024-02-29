// import React from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Header from "../Components/Header";

// const Login = ({ navigation: propNavigation }) => {
//   const navigation = useNavigation();

//   const handleLogin = () => {
//     propNavigation.navigate("Home");
//   };

//   return (
//     <>
//       <Header />
//       <View style={styles.container}>
//         <View style={styles.formContainer}>
//           <View style={styles.form}>
//             <Text style={styles.formText}>Login</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="User ID"
//               placeholderTextColor="#aaa"
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               placeholderTextColor="#aaa"
//               secureTextEntry
//             />
//             <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
//               <Text style={styles.submitButtonText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//   },
//   formContainer: {
//     width: "80%",
//     alignItems: "center",
//   },
//   form: {
//     width: "100%",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     padding: 20,
//     backgroundColor: "white",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   formText: {
//     fontSize: 18,
//     marginBottom: 25,
//     color: "#555",
//   },
//   input: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 25,
//     paddingLeft: 10,
//     width: "80%",
//   },
//   submitButton: {
//     backgroundColor: "#007bff",
//     padding: 10,
//     borderRadius: 5,
//     width: "80%",
//     alignItems: "center",
//   },
//   submitButtonText: {
//     color: "white",
//     fontSize: 16,
//   },
// });

// export default Login;

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header";

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("HomeDrawer");
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <Text style={styles.formText}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="User ID"
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
  },
  form: {
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formText: {
    fontSize: 18,
    marginBottom: 25,
    color: "#555",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 25,
    paddingLeft: 10,
    width: "80%",
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Login;
