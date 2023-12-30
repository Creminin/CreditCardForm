import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react"

interface PropsForm {
    Label: string;
    InputType: string;
    PlaceHolder?: string;
}

export const FormField = ({ Label, InputType, PlaceHolder } : PropsForm) => {
    return(
        <Box>
            <FormControl isRequired>
                <FormLabel>{Label}</FormLabel>
                <Input type={InputType} placeholder={PlaceHolder} borderColor="gray.700"/>
            </FormControl>
        </Box>
    )
}