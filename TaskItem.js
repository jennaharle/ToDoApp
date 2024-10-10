import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onToggleTask }) => {
  return (
    <TouchableOpacity onPress={() => onToggleTask(task.id)}>
      <Text style={[styles.taskText, task.done && styles.taskDone]}>
        {task.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskText: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskDone: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskItem;
