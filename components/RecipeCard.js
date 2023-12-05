import { Text, View, Button, Image, Modal } from "react-native"
import RecipeCardModal from "./RecipeCardModal"
import { useState } from "react"

function RecipeCard({
  title,
  description,
  ingredients,
  prepareMethods,
  vegan
}) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <View className="border border-orange-500 rounded-lg h-32 mb-5 py-3 px-3 flex flex-row align-baseline">
      {vegan ? (
        <Image
          className="h-24 w-24"
          source={require("../assets/images/vegan.jpg")}
        />
      ) : (
        <Image
          className="h-24 w-24"
          source={require("../assets/images/barbecue.webp")}
        />
      )}

      <View className="h-auto w-52 ml-2 outline-none">
        <Text className="font-bold text-lg ml-1 mr-2">{title}</Text>
        <Text className="ml-1 mr-2">{description}</Text>

        <View className="rounded-sm w-20 ml-28 absolute mt-16">
          <Button
            title="Ver mais"
            color={colors.primary}
            onPress={() => setOpenModal(true)}
          />
        </View>
      </View>

      <Modal
        visible={openModal}
        transparent={true}
        onRequestClose={() => setOpenModal(false)}
      >
        <RecipeCardModal
          title={title}
          description={description}
          ingredients={ingredients}
          prepareMethods={prepareMethods}
          vegan={vegan}
          closeModal={() => setOpenModal(false)}
        />
      </Modal>
    </View>
  )
}

export default RecipeCard
