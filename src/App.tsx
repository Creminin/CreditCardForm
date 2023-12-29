import { Flex } from "@chakra-ui/react"
import { ModalForm } from "./assets/components/ModalForm"

function App() {

  return (
    <Flex h='100vh' bg='MyBgColor' color='white' justifyContent='center' alignItems='center'>
      <ModalForm />
    </Flex>
  )
}

export default App
