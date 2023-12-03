import React from "react"
import { Button, Pressable, Text, View, Image } from "react-native"
import { AntDesign } from "@expo/vector-icons"

function RecipeCardModal({
  title,
  description,
  ingredients,
  prepareMethods,
  vegan,
  closeModal
}) {
  return (
    <View className="bg-orange-100 m-8 p-5 w-fit h-5/6 outline-none shadow-black shadow-xl">
      <View className="flex flex-row justify-between outline-none items-center border-b-orange-500 border-b-4 pb-3">
        <Text className="font-bold uppercase text-left text-3xl w-3/4">
          {title}
        </Text>
        <Pressable onPress={closeModal} className="">
          <AntDesign name="closecircle" size={32} color="black" />
        </Pressable>
      </View>

      <View>
        {vegan ? (
          <Image
            className="h-16 w-full mt-5 mb-3"
            source={require("../assets/images/vegan.jpg")}
          />
        ) : (
          <Image
            className="h-16 w-full mt-5 mb-3"
            source={require("../assets/images/barbecue.webp")}
          />
        )}
      </View>

      <Text className="text-lg">{description}</Text>

      <Text className="mt-4 font-medium text-lg">INGREDIENTES</Text>
      {ingredients.map((ingredient, index) => (
        <Text>
          {++index}. {ingredient}
        </Text>
      ))}

      <Text className="mt-4 font-medium text-lg">MODO DE PREPARO</Text>
      {prepareMethods.map((modo, index) => (
        <Text>
          {++index}. {modo}
        </Text>
      ))}
    </View>
  )
}

export default RecipeCardModal
