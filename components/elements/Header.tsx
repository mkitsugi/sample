import { Box, Button, Flex, Text, Center, HStack, Spacer } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SnsLinks } from './SnsLinks'
import { Wallet } from './Wallet'
import { NftContractContext } from '../../contexts/NftContractProvider'
import { useContext } from 'react'

const Component: React.FC = () => {
  const router = useRouter()
  const store = useContext(NftContractContext)

  return (
    <Box
      as="header"
      alignItems="center"
      position={'fixed'}
      background= "rgba(113, 236, 164, 1)"
      //"rgba(255, 255, 255, 0.95)"
      backdropBlur="md"
      w="full"
      boxShadow="xl"
      zIndex={10}
    >
      <HStack w="full" alignItems={"center"} padding = "5" >
      <Box w={"20%"} display={{ base: 'none', lg: 'block' }}>
            <SnsLinks />
      </Box>   
      <Spacer display={{ base: 'none', lg: 'block' }}></Spacer>
      <Text textStyle="logo" cursor="pointer" fontSize={{base : "3xl", md : "4xl"}} as ="i">
          Oasys Punks
        </Text>
        <Spacer ></Spacer>
      <Box w={{base : "35%", md: "20%"}} >
            <Wallet />
          </Box>
          
          </HStack>




    </Box>

    

  )
}

export { Component as Header }
