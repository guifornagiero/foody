import {
  Button,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView
} from "react-native"
import colors from "../public/colors"
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = () => {
    if (username == "" || password == "") {
      alert("Campos inválidos!")
      return
    }

    AsyncStorage.getItem(username, (err, value) => {
      if (err || !value) {
        alert("Usuário não encontrado!")
        return
      }
      if (password === value) {
        alert("Usuário logado!")
        navigation.navigate("App")
      } else alert("Senha incorreta!")
    })
  }

  return (
    <ScrollView>
      <View className="p-10 bg-slate-800 h-screen">
        <Image
          className="w-full h-32 mb-12 mt-4"
          source={require("../assets/images/logo_foody.png")}
        />

        <Text className="text-2xl mb-8 text-white text-center">
          - Login de usuário -
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
            onPress={loginUser}
            color={colors.primary}
            title="Entrar"
          ></Button>
        </View>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          className="mt-28 flex flex-row justify-center"
        >
          <Text className="text-orange-400 text-xl underline">
            Registrar-se
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default LoginScreen
