import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { COLORS } from './assets/styles';
import { CreateNewTask } from './ui/components/CreateNewTask';
import {  useSelector} from 'react-redux';

import { ListTask } from './ui/components/ListTask';


import { ToogleSwitch } from './ui/components/ToogleSwitch';

export const Home = () => {


    const { theme } = useSelector((state) => state.task)

    const [hidden, setHidden] = React.useState(false);
    const TRANSITIONS = ['fade', 'slide', 'none'];

    const STYLES = ['default', 'dark-content', 'light-content'];
    const [statusBarStyle, setStatusBarStyle] = React.useState(STYLES[1]);

    const [statusBarTransition, setStatusBarTransition] = React.useState(TRANSITIONS[1]);



    return (

      <SafeAreaView style={theme ? styles.container : styles.container2}>
        <StatusBar
        animated={true}
          barStyle={statusBarStyle}
          backgroundColor="#61dafb"
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
          <View style={styles.section}>
          <ToogleSwitch/>


          <Text style={styles.sectionTitle} >Заметки </Text>
            <ListTask/>
          </View>

            <CreateNewTask/>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: COLORS.yellow,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.cyan,
      },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      textAlign:'center',
      paddingBottom: 30,
    },
    section: {
      marginTop: 50,

      width: Dimensions.get('window').width*.8,
    }

  });
