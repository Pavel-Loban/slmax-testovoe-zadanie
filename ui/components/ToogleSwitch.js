import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Switch } from 'react-native-switch';
import { COLORS } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../bll/taskSlise';

export const ToogleSwitch = () => {

    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.task)


      const onToogleSwitch = () => {
    dispatch(setTheme(!theme))
  }




    return (
        <Switch
            value={theme}
            onValueChange={onToogleSwitch}
            disabled={false}
            circleSize={30}
            barHeight={30}
            circleBorderWidth={1}
            backgroundActive={COLORS.cyan}
            backgroundInactive={COLORS.yellow}
            circleActiveColor={COLORS.cyan}
            circleInActiveColor={COLORS.yellow}


            changeValueImmediately={true}
            innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
            outerCircleStyle={{}}
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2}
            switchRightPx={2}
            switchWidthMultiplier={2}
            switchBorderRadius={30}
        />
    )
}


const styles = StyleSheet.create({

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hide: {
        display: 'none',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },


})
