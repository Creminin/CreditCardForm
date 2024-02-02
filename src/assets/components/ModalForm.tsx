import { Button, FormControl, FormLabel, Input, FormErrorMessage, Flex } from "@chakra-ui/react"
import {useFormik} from "formik"
import * as yup from "yup"

export const ModalForm = () => {

  const formik = useFormik({
    initialValues: {
      numberCard: '',
      nameCard: '',
      month: '',
      year: '',
      CVV: '',
    },

    validationSchema: yup.object({
      numberCard: yup.string().max(16, 'Porfavor verificar o número').min(16, 'Porfavor verificar o número').required('Este campo é obrigatório'),
      nameCard: yup.string().max(50, 'Porvafor verificar o nome do titular').required('Este campo é obrigatório'),
      month: yup.date().max(4, 'Porfavor verifique a data digitada').required('Este campo é obrigatório')
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

    return(
            <form onSubmit={formik.handleSubmit}>
              <FormControl isInvalid={formik.touched.numberCard && !!formik.errors.numberCard}>
                <FormLabel>Número do cartão</FormLabel>
                <Input type="number" placeholder="Número impresso no cartão" name="numberCard" onChange={formik.handleChange} value={formik.values.numberCard}/>
                <FormErrorMessage>{formik.errors.numberCard}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.nameCard && !!formik.errors.nameCard}>
                <FormLabel>Nome do titular</FormLabel>
                <Input type="name" placeholder="Número impresso no cartão" name="nameCard" onChange={formik.handleChange} value={formik.values.nameCard}/>
                <FormErrorMessage>{formik.errors.nameCard}</FormErrorMessage>
              </FormControl>

              <Flex gap="15px">
              <FormControl isInvalid={formik.touched.month && !!formik.errors.month} border="none">
                <FormLabel>Validade</FormLabel>
                <Input type="text" placeholder="mm/aa" maxLength={5} onChange={formik.handleChange} value={formik.values.month} name="month"/>
                <FormErrorMessage>{formik.errors.nameCard}</FormErrorMessage>
              </FormControl>
              </Flex>

              <Button type="submit" w="100%">Cadastrar forma de pagamento</Button>
            </form>
    )
}