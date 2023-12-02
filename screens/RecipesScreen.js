import { ScrollView, Text, View, Image, Button, Pressable } from "react-native"
import RecipeCard from "../components/RecipeCard"
import { MaterialIcons } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { getAllRecipes } from "../public/firebase"
import colors from "../public/colors"

export default function RecipesScreen() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let data = await getAllRecipes()

    if (data !== null) {
      setRecipes(data)
    }
  }

  return (
    <ScrollView>
      <View className="h-auto w-screen mt-8 p-6">
        <View className="flex flex-row items-center">
          <Text className="text-4xl text-center w-auto pl-24 ml-2">
            RECEITAS
          </Text>
          <View>
            <Pressable className="ml-14" onPress={async () => await getData()}>
              <MaterialIcons name="update" size={36} color={colors.primary} />
            </Pressable>
          </View>
        </View>

        <View className="px-3 mt-5">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              description={recipe.description}
              ingredients={recipe.ingredients}
              prepareMethods={recipe.prepareMethods}
              vegan={recipe.vegan}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
