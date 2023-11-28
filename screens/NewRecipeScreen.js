import { useState } from "react"
import { Text, View, TextInput } from "react-native"

export default function NewRecipeScreen() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [ingredients, setIngredients] = useState("")

  return (
    <View className="h-screen w-screen mt-8 bg-red-400 p-6">
      <Text className="text-4xl text-center">NOVA RECEITA</Text>

      <View className="px-3 mt-5">
        <Text className="text-lg ml-3">Titulo</Text>
        <TextInput
          className="w-auto mx-3 border-2 border-black px-2 text-xl"
          onChangeText={setTitle}
          value={title}
          placeholder="Digite o titulo"
        />
      </View>

      <View className="px-3 mt-5">
        <Text className="text-lg ml-3">Descrição</Text>
        <TextInput
          className="w-auto mx-3 border-2 border-black px-2 text-xl leading-8"
          multiline={true}
          onChangeText={setDescription}
          value={description}
          placeholder="Digite a descrição"
        />
      </View>

      <View className="px-3 mt-5">
        <Text className="text-lg ml-3">Ingredientes</Text>
        <TextInput
          className="w-auto mx-3 border-2 border-black px-2 text-xl leading-8"
          multiline={true}
          onChangeText={setIngredients}
          value={ingredients}
          placeholder="Digite os ingredientes"
        />
      </View>
    </View>
  )
}
