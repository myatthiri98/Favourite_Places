import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AllPlaces from './src/screens/AllPlaces';
import AddPlace from './src/screens/AddPlace';
import IconButton from './src/components/UI/IconButton';
import { Colors } from './src/constants/colors';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar animated={true} barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700}
          }
        }>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your Favourite Place',
              headerRight: ({tintColor}) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{title: 'Add a New Place'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
