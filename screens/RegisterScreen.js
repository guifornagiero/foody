import { Button, Text, View, Image, TextInput, ScrollView } from "react-native"
import colors from "../public/colors"
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = () => {
    if (username == "" || password == "") {
      alert("Campos inválidos!")
      return
    }

    AsyncStorage.setItem(username, password, (err) => {
      if (!err) {
        alert("Usuário registrado com sucesso!")
        navigation.navigate("Login")
        return
      }
      alert("Erro ao registrar usuário!")
    })
  }

  return (
    <ScrollView>
      <View className="p-10 bg-slate-800 h-screen">
        <Image
          className="w-full h-32 mb-16 mt-4"
          source={require("../assets/images/logo_foody.png")}
        />

        <Text className="text-2xl mb-8 text-white text-center">
          - Registro de usuário -
        </Text>

        <Text className="text-xl text-white">Login</Text>
        <TextInput
          className="w-auto px-2 my-1 py-1 text-xl leading-6 bg-slate-100"
          placeholder="Digite seu login"
          value={username}
          onChangeText={setUsername}
        ></TextInput>

        <Text className="text-xl text-white mt-4">Senha</Text>
        <TextInput
          className="w-auto px-2 my-1 py-1 text-xl leading-6 bg-slate-100"
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        ></TextInput>

        <View className="w-auto mt-4 flex flex-row justify-center">
          <Button
            onPress={registerUser}
            color={colors.primary}
            title="Registrar"
          ></Button>
        </View>
      </View>
    </ScrollView>
  )
}
