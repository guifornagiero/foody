import { initializeApp } from "firebase/app"
import { getDatabase, ref, push, get, child } from "firebase/database"
import { firebaseConfig } from "../config"

const app = initializeApp(firebaseConfig)

export function postRecipe(receita) {
  const db = getDatabase()
  const reference = ref(db, "/receitas")

  push(reference, {
    title: receita.title,
    description: receita.description,
    ingredientes: receita.ingredients,
    modoPreparos: receita.modoPreparos,
    vegan: receita.vegan
  })
}

export async function getAllRecipes() {
  const dbRef = ref(getDatabase())

  try {
    const snapshot = await get(child(dbRef, "/receitas"))

    if (snapshot.exists()) {
      let data = snapshot.val()
      let dados = Object.values(data)

      return dados
    } else {
      console.log("Nenhuma receita cadastrada!")
      return null
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
