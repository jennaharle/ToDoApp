import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim().length > 0) {
      onAddTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Syötä tehtävä"
        value={taskTitle}
        onChangeText={setTaskTitle}
        style={styles.input}
      />
      <Button title="Lisää tehtävä" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    marginRight: 8,
  },
});

export default TaskInput;
