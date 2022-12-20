import { Card, AspectRatio, Image, Flex, Spinner, Text } from '@chakra-ui/react'

//import Image from 'next/image'
import React from 'react'

export type NftImageProps = {
  imageUri?: string
}

const Component: React.FC<NftImageProps> = ({ imageUri }) => {
  return imageUri ? (
    <AspectRatio
      maxW="400px"
      ratio={1}
      
      //backgroundColor="gray.50"
      position="relative"
    >
      <>
        <Flex
          position="absolute"
          left={0}
          right={0}
          w="100%"
          height="100%"
          alignItems="center"
          justifyItems="center"
        >
          <Spinner size="md" color="gray.300" />
        </Flex>


          <Image  src={imageUri} width={400} height={400} borderRadius = "20" />
        
      </>
    </AspectRatio>
  ) : (
    <AspectRatio maxW="400px" ratio={1} backgroundColor="gray.50">
      <Text fontSize="xs" color="gray.300">
        noImage
      </Text>
    </AspectRatio>
  )
}

export { Component as NftImage }
