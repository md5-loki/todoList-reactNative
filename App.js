import React, {useState} from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>

      {/* Agenda Diaria */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Agenda</Text>

        <View style={styles.items}>
          {/* Tareas */}
          {
            taskItems.map((item, index) =>{
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      {/* Escribir nuevo */}
      {/* On iOS do padding, on Android do height */}
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding": "height"} style={styles.writeTaskWrapper}>
      
        <TextInput style={styles.input} placeholder={"Escribe una tarea"} value={task} onChangeText={text => setTask(text)}/>
        
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
    backgroundColor: '#ECECEC',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: "#000",
    borderWidth: 1.5,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#000",
    borderWidth: 1.5,    
  },
  addText:{

  },
});
