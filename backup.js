import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Keyboard, ScrollView, Platform,
  } from "react-native";
  import React, { useState } from "react";
  
  export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    
    const Task = (props) => {
  
      return (
          <View style={styles.item}>
              <View style={styles.itemLeft}>
                  <View style={styles.square}></View>
                  <Text style={styles.itemText}>{props.text}</Text>
              </View>
              <View style={styles.circular}></View>
          </View>
      )
  }
  
    const handleAddTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    };
  
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy);
    };
  
    return (
      <View style={styles.container}>
        {/* Todays Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Todays tasks</Text>
  
          <ScrollView style={styles.scrollView}>
            <View style={styles.items}>
            {/* This is where the tasks will go */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
          </ScrollView>
  
          
        </View>
  
        {/* write a task */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Write a task"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
  
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E8EAED",
    },
  
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: "absolute",
      bottom: 60,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: "#FFF",
      borderRadius: 60,
      borderColor: "#C0C0C0",
      borderwidth: 1,
      width: 250,
    },
    addWrapper: {
      backgroundColor: "#FFF",
      borderRadius: 60,
      borderColor: "#C0C0C0",
      borderwidth: 1,
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
    },
    addText: {},
    scrollView: {
      height: '80%',
    },
    text: {
      fontSize: 42,
    },
    item: {
          backgroundColor: '#FFF',
          padding: 15,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
      },
      itemLeft: {
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
      },
      square: {
          width: 24,
          height: 24,
          backgroundColor: '#55BCF6',
          opacity: 0.4,
          borderRadius: 5,
          marginRight: 15,
      },
      itemText: {
          maxWidth: '80%',
      },
      circular: {
          width: 12,
          height: 12,
          borderColor: '#55BCF6',
          borderWidth: 2,
          borderRadius: 5,
      },
  });
  
  // https://www.youtube.com/watch?v=00HFzh3w1B8
  