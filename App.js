import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, ScrollView, Image, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const App = () => {
  const [answers, setAnswers] = useState(Array(3).fill('')); // State to hold answers

  const questions = [
    {
      question: "What animal is this?",
      image: require('./img/deer.jpg'), // Use require to load local images
      options: [
        { label: 'Deer', value: 'Deer' },
        { label: 'Cat', value: 'Cat' },
        { label: 'Dog', value: 'Dog' },
      ],
      correctAnswer: 'Deer'
    },
    {
      question: "What animal is this?",
      image: require('./img/leopard.jpg'), // Use require to load local images
      options: [
        { label: 'Fish', value: 'Fish' },
        { label: 'Bird', value: 'Bird' },
        { label: 'Leopard', value: 'Leopard' },
      ],
      correctAnswer: 'Leopard'
    },
    {
      question: "What animal is this?",
      image: require('./img/tiger.jpg'), // Use require to load local images
      options: [
        { label: 'Elephant', value: 'Elephant' },
        { label: 'Tiger', value: 'Tiger' },
        { label: 'Zebra', value: 'Zebra' },
      ],
      correctAnswer: 'Tiger'
    },
  ];

  const handleSubmit = () => {
    const correctCount = answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    let feedback;

    if (correctCount === questions.length) {
      feedback = "Well done!";
    } else if (correctCount > questions.length / 2) {
      feedback = "Good job!";
    } else {
      feedback = "You can do better next time.";
    }

    Alert.alert(`You got ${correctCount} out of ${questions.length} correct. ${feedback}`);
  };

  return (
      <ScrollView>
        <StatusBar hidden={true} />
        <Text>Animal Quiz</Text>
        {questions.map((q, index) => (
            <ScrollView key={index}>
              <Image source={q.image} style={{ width: 400, height: 300 }} />
              <Text>{q.question}</Text>
              <RNPickerSelect
                  onValueChange={(value) => {
                    const newAnswers = [...answers];
                    newAnswers[index] = value;
                    setAnswers(newAnswers);
                  }}
                  items={q.options}
              />
            </ScrollView>
        ))}
        <Button title="Submit Answers" onPress={handleSubmit} />
      </ScrollView>
  );
};

export default App;
