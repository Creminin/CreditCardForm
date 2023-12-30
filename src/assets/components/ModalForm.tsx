import { Button, Flex } from "@chakra-ui/react"
import { FormField } from "./Form"
import { Formik } from "formik"

export const ModalForm = () => {
    return(
        <Formik initialValues={{}} onSubmit={() => {}}>
            <FormField Label="Número do cartão" InputType="number" PlaceHolder="**** ****"/>
            <FormField Label="Nome do titular do cartão" InputType="name" PlaceHolder="Nome como esta no cartão"/>

            <Flex>
                <FormField Label="Data de validade" InputType="date"/>
                <FormField Label="CVV" InputType="number" PlaceHolder="***"/>
            </Flex>
            
            <Button type="submit" w="100%">Adicionar Cartão</Button>
        </Formik>
    )
}