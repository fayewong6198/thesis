import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

import { connect } from "react-redux";
import { loadQuestionBank } from "../../store/actions/questionBank";

import AlertComponent from "../../components/AlertComponent";

const ManageQuizScreen = ({ questionBank, loadQuestionBank, navigation }) => {
  useEffect(() => {
    loadQuestionBank();

    return () => {};
  }, []);
  return (
    <View>
      <AlertComponent></AlertComponent>
      {questionBank.questionBanks.length > 0 ? (
        <FlatList
          data={questionBank.questionBanks}
          renderItem={({ item }) => (
            <View style={styles.items}>
              <Button
                title={item.name}
                onPress={() =>
                  navigation.navigate("ManageChapter", {
                    QuestionBankId: item._id,
                  })
                }
              ></Button>
            </View>
          )}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <Text>No Question Bank found</Text>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  questionBank: state.questionBank,
});

const styles = StyleSheet.create({
  items: {
    margin: 10,
  },
});

export default connect(mapStateToProps, { loadQuestionBank })(ManageQuizScreen);