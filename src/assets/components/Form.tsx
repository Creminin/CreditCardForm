import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react"

export const FormCard = () => {
    return(
        <Box>
            <FormControl>
                <FormLabel>Número do cartão</FormLabel>
                <Input />
            </FormControl>

            <FormControl>
                <FormLabel></FormLabel>
                <Input />
            </FormControl>
        </Box>
    )
}