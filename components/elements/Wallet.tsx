import { Button, Text } from '@chakra-ui/react'
import { useDisconnect } from '@thirdweb-dev/react'
import { useState } from 'react'
import { useConnectWallet } from '../../hooks/useConnectWallet'

const truncate = (str: string, len: number) => {
  return str.length <= len ? str : str.substr(0, len) + '...'
}

const Component: React.FC = () => {
  const { address, connectWallet } = useConnectWallet()
  const disconnectWallet = useDisconnect()
  const [addressHovering, setAddressHovering] = useState(false)

  return (
    <>
      {address ? (
        <div
          onMouseEnter={() => setAddressHovering(true)}
          onMouseLeave={() => setAddressHovering(false)}
        >
          {addressHovering ? (
            <Button
              onClick={disconnectWallet}
              display="block"
              backgroundColor="black"
              w="10rem"
            >
              <Text fontSize={{ sm : "xs" ,md: "md"}}>Disconnect Wallet</Text>
            </Button>
          ) : (
            <Button
              onClick={disconnectWallet}
              display="block"
              backgroundColor="black"
              color="white"
              w="10rem"
            >
              <Text fontSize={{ sm : "xs" ,md: "md"}}>{truncate(address, 14)}</Text>
            </Button>
          )}
        </div>
      ) : (
        <Button
          onClick={connectWallet}
          display="block"
          textAlign= "center"
          w= {{base: "8rem", sm : "10rem", md: "10rem"}}
        >
          <Text fontSize={{ base : "sm" ,md: "md"}}>Connect Wallet</Text>
        </Button>
      )}
    </>
  )
}

export { Component as Wallet }
