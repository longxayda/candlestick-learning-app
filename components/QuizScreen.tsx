import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const QuizScreen = ({ quiz }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = quiz.questions[currentQ];

  const handleSelect = (index) => {
    setSelected(index);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setCurrentQ(currentQ + 1);
    setSelected(null);
    setShowExplanation(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.question}>{question.question}</Text>

      {question.options.map((opt, idx) => {
        const isSelected = selected === idx;
        const isCorrect = idx === question.answerIndex;

        let optionStyle = styles.option;
        if (showExplanation) {
          if (isSelected && isCorrect) optionStyle = styles.correctOption;
          else if (isSelected && !isCorrect) optionStyle = styles.wrongOption;
        }

        return (
          <TouchableOpacity
            key={idx}
            style={optionStyle}
            onPress={() => handleSelect(idx)}
            disabled={showExplanation}
          >
            <Text>{opt}</Text>
          </TouchableOpacity>
        );
      })}

      {showExplanation && (
        <View style={styles.explanationBox}>
          <Text style={styles.explanationText}>
            ✅ Đáp án đúng: {question.options[question.answerIndex]}
          </Text>
          <Text style={styles.explanationNote}>{question.explanation}</Text>
        </View>
      )}

      {showExplanation && currentQ < quiz.questions.length - 1 && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Câu tiếp theo</Text>
        </TouchableOpacity>
      )}

      {showExplanation && currentQ === quiz.questions.length - 1 && (
        <Text style={styles.doneText}>🎉 Bạn đã hoàn thành bài trắc nghiệm!</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  option: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  correctOption: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#c8f7c5',
    borderRadius: 10,
  },
  wrongOption: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f7c5c5',
    borderRadius: 10,
  },
  explanationBox: {
    backgroundColor: '#dbeafe',
    padding: 12,
    marginTop: 16,
    borderRadius: 10,
  },
  explanationText: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  explanationNote: {
    fontStyle: 'italic',
  },
  nextButton: {
    backgroundColor: '#6366f1',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  doneText: {
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default QuizScreen;
