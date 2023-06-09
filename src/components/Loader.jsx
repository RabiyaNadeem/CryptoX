import { Spinner,Box,VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack justifyContent={"center"} height={"90vh"}>
      <Box transform={"scale(3)"}><Spinner size={"xl"}/></Box>
      
    </VStack>
  )
}

export default Loader