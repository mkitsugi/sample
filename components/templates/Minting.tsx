import { Card, CardBody, Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import { useContext } from 'react'
import { NftContractContext } from '../../contexts/NftContractProvider'
import { useConnectWallet } from '../../hooks/useConnectWallet'
import { useMint } from '../../hooks/useMint'
import { Fade } from '../elements/Fade'
import { NftImagesSlideShow } from '../elements/NftImagesSlideShow'

import { useAddress } from '@thirdweb-dev/react'

const Component: React.FC = () => {
  const store = useContext(NftContractContext)
  const address = useAddress()

  const { mint } = useMint()
  const { connectWallet } = useConnectWallet()

  return (
    <Flex
      maxW={'8xl'}
      justifyContent="center"
      h="100%"
      alignItems="center"
      mx="auto"
    >
      <Fade>
        
        <VStack spacing={6}>
        <Card borderRadius={"30"} bgColor = "white" size = "lg" boxShadow={"2xl"}>
          <CardBody>
          <VStack spacing={5}>
          <Box width="240px" height="240px" >
            <NftImagesSlideShow />
          </Box>

          <Text width="360px" align={"center"}>
          ALL PROCEEDS DIRECTED TO
PUBLIC GOODS FUNDING
MINTING IS COMPLETE
FOLLOW UPDATES ON DONATION PROCESS
HTTPS://TWITTER.COM/OPTIPUNK
      </Text>

          <div>
            {address ? (
              <Button onClick={mint} disabled={store.isClaiming}>
                {store.isClaiming
                  ? 'claiming...'
                  : `MINT (${store.claimPrice} OAS)`}
              </Button>
            ) : (
              <Button onClick={connectWallet}>
                <Text fontSize="s">Connect Wallet</Text>
              </Button>
            )}
            <Text pt={2} fontSize="xs" textAlign={'center'} paddingTop = "5">
              {store.claimedSupply} / {store.totalSupply}
            </Text>

          </div>
          </VStack>
          </CardBody>
        </Card>
        <Text pt={2} fontSize="xs" textAlign={'center'}>
              goerli testnet
            </Text>
        </VStack>

      </Fade>
    </Flex>
  )
}

export { Component as Minting }
