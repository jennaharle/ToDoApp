import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const STORAGE_KEY = '@tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Lataa tehtävät AsyncStoragesta
  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    };
    loadTasks();
  }, []);

  // Tallenna tehtävät AsyncStorageen
  const saveTasks = async (tasks) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  };

  // Lisää uusi tehtävä
  const addTask = (taskTitle) => {
    const newTask = { id: Date.now().toString(), title: taskTitle, done: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Merkitse tehtävä tehdyksi/tekemättömäksi
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;