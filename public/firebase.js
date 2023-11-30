import { initializeApp } from "firebase/app"
import { getDatabase, ref, push } from "firebase/database"
import { firebaseConfig } from "../config"

const app = initializeApp(firebaseConfig)

export function insertReceita(receita) {
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
