import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { useContext } from "react";

import MealsList from "../components/MealsList/MealsList";

import { FavoriteContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen() {
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
    // const favoriteMealsCtx = useContext(FavoriteContext);

    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));
    // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no facorite meals yet.</Text>
            </View>
        );
    }

    return (
        <MealsList items={favoriteMeals} />
    )
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});