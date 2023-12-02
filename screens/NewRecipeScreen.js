import { useState } from "react"
import {
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  ScrollView,
  Image,
  Vibration
} from "react-native"
import colors from "../public/colors"
import Checkbox from "expo-checkbox"
import { postRecipe } from "../public/firebase"

export default function NewRecipeScreen() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [ingredientName, setIngredientName] = useState("")
  const [ingredients, setIngredients] = useState([])

  const [modoPreparoString, setModoPreparoString] = useState("")
  const [modoPreparos, setModoPreparos] = useState([])

  const [vegan, setVegan] = useState(false)

  const addIngredient = () => {
    setIngredients([...ingredients, ingredientName])
    setIngredientName("")
  }

  const addModoPreparo = () => {
    setModoPreparos([...modoPreparos, modoPreparoString])
    setModoPreparoString("")
  }

  const adicionarReceita = () => {
    if (
      !title ||
      !description ||
      ingredients.length < 1 ||
      modoPreparos.length < 1
    ) {
      alert("Dados da receita faltando!")
      return
    }

    let novaReceita = {
      title,
      description,
      vegan,
      ingredients,
      modoPreparos
    }

    postRecipe(novaReceita)

    alert("Receita adicionada!")
    Vibration.vibrate(500)

    console.log(novaReceita)

    setTitle("")
    setDescription("")
    setIngredients([])
    setModoPreparos([])
  }

  return (
    <ScrollView>
      <View className="h-auto w-screen mt-8 p-6">
        <Text className="text-4xl text-center">NOVA RECEITA</Text>

        <View className="px-3 mt-5">
          <Text className="text-lg ml-3 font-normal">Titulo</Text>
          <TextInput
            className="w-auto mx-3 border-0.5 border-black px-2 text-xl"
            onChangeText={setTitle}
            value={title}
            placeholder="Digite o titulo"
          />
        </View>

        <View className="px-3 mt-5">
          <Text className="text-lg ml-3 font-normal">Descrição</Text>
          <TextInput
            className="w-auto mx-3 border-0.5 border-black px-2 text-xl leading-6"
            multiline={true}
            onChangeText={setDescription}
            value={description}
            placeholder="Digite a descrição"
          />
        </View>

        <View className="px-3 mt-5">
          <Text className="text-lg ml-3 font-normal">Ingredientes</Text>
          <TextInput
            className="w-auto mx-3 border-0.5 border-black px-2 text-xl leading-6"
            multiline={true}
            value={ingredientName}
            onChangeText={setIngredientName}
            placeholder="Digite os ingredientes"
          />
          <View className="flex-row justify-center absolute right-5 top-6">
            <Button title="+" color={colors.primary} onPress={addIngredient} />
          </View>
        </View>

        {ingredients.length > 0 ? (
          <View className="px-3 m-5 mb-2">
            {ingredients.map((ingredient, index) => (
              <Text key={index}>
                {++index}. {ingredient}
              </Text>
            ))}
          </View>
        ) : (
          <View></View>
        )}

        <View className="px-3 mt-5">
          <Text className="text-lg ml-3 font-normal">Modo de Preparo</Text>
          <TextInput
            className="w-auto mx-3 border-0.5 border-black px-2 text-xl leading-6"
            multiline={true}
            value={modoPreparoString}
            onChangeText={setModoPreparoString}
            placeholder="Digite o Modo de Preparo"
          />
          <View className="flex-row justify-center absolute right-5 top-6">
            <Button title="+" color={colors.primary} onPress={addModoPreparo} />
          </View>
        </View>

        {modoPreparos.length > 0 ? (
          <View className="px-3 m-5 mb-3">
            {modoPreparos.map((modoPreparo, index) => (
              <Text key={index}>
                {++index}. {modoPreparo}
              </Text>
            ))}
          </View>
        ) : (
          <View className="mb-1"></View>
        )}

        <View className="mt-5 flex flex-col">
          <View className="flex flex-row justify-around mb-2">
            <View className="ml-2 flex flex-row gap-1">
              <Checkbox
                color={colors.primary}
                value={vegan}
                onValueChange={(valor) => setVegan(valor)}
              />
              <Text>Vegano</Text>
            </View>
            <View className="flex flex-row gap-1">
              <Checkbox
                color={colors.primary}
                value={!vegan}
                onValueChange={(valor) => setVegan(!valor)}
              />
              <Text>Não vegano</Text>
            </View>
          </View>

          <View className="flex flex-row justify-center gap-3">
            <Image
              className="h-40 w-40"
              source={require("../assets/images/vegan.jpg")}
            />
            <Image
              className="h-40 w-40"
              source={require("../assets/images/barbecue.webp")}
            />
          </View>
        </View>

        <View className="m-5">
          <Button
            title="Adicionar"
            color={colors.primary}
            onPress={adicionarReceita}
          />
        </View>
      </View>
    </ScrollView>
  )
}
