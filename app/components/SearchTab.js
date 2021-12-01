import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { shouldUseActivityState } from 'react-native-screens';
import SelectDropdown from 'react-native-select-dropdown';

const matchOptions = ["Low", "Medium", "High", "Total"]
const dietaryRestrictionOptions = ["Yes", "No"]

function SearchTab({ navigation }) {
  const [selectedItem1, setMenuText1] = React.useState('')
  const [selectedItem2, setMenuText2] = React.useState('')
  const [barNum, setBarNum] = React.useState(3)

  const ingredientBarList = [
    {key: '1'},
    {key: '2'},
    {key: '3'},
  ];

  const [displayedList, setDisplayedList] = React.useState(ingredientBarList)

  const addIngredientMethod = () => {
    setDisplayedList([...displayedList, {key: (barNum + 1).toString()}]);
    setBarNum(barNum + 1);
  }

  const deleteIngredientMethod = (givenKey) => {
    setDisplayedList(displayedList.filter(item => item.key != givenKey));
    setBarNum(barNum - 1);
  }

  return (
    <ScrollView testID='searchTab'>
      <Text>This is the page that will allow the user to search for new recipes online. </Text>
      <Text> </Text>
      <Text> Enter any general search queries (e.g. "pasta dishes") here: </Text>
      <Text> </Text>
      <Text> [CREATE A TEXT ENTRY SECTION HERE] </Text>
      <Text> </Text>
      <Text> Enter available ingredients: </Text>
      <FlatList
        style = {styles.ingredientAreaStyle}
        data={displayedList}
        renderItem={({item}) =>
          <View style={styles.item}>
            <TextInput style={styles.ingredientEntryBarStyle}/> 
            <Button
              title="Delete"
              color ='#2f4f4f'
              onPress = {() =>
                deleteIngredientMethod(item.key)
              }
            />
          </View>
        }
      />
      <Text> </Text>
      <Button
        title="Press here to add ingredient bar."
        color ='#2f4f4f'
        onPress = {() =>
          addIngredientMethod()
        }
      />
      <Text> </Text>
      <Text style={styles.underlinedText}> Search Options </Text>
      <Text> </Text>
      <Text> Match existing ingredients</Text>
      <SelectDropdown
        data={matchOptions}
        onSelect={(selectedItem1, index1) => setMenuText1(selectedItem1)}
      />
      <Text> Account for dietary restrictions?</Text>
      <SelectDropdown
        data={dietaryRestrictionOptions}
        onSelect={(selectedItem2, index2) => setMenuText2(selectedItem2)}
      />
      <Text> </Text>
      <Text>
        The above two dropdown menus currently read as follows: 
      </Text>
      <Text> </Text>
      <Text>
        {selectedItem1}
      </Text>
      <Text> </Text>
      <Text>
        {selectedItem2}
      </Text>
    <Button
      title="Click here to search!"
      color ='#2f4f4f'
    />
    <Text> </Text>
    <Text> </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ingredientEntryBarStyle: {
    height: 20,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },
  ingredientAreaStyle: {
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    paddingTop: 18,
  },
  item: {
    padding: 10,
    height: 80,
    flexDirection: "row",
  },
  underlinedText: {
    textDecorationLine: 'underline',
  }
})

export default SearchTab;