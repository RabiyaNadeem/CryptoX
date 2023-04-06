import React from 'react'
import {HStack ,Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
   <HStack bgColor={'pink.600'} p='4' shadow={'base'}>
     <Button variant={'unstyled'} color={'whiteAlpha.900'}>
      <Link to='/' >Home</Link>
     </Button>
     <Button variant={'unstyled'} color={'whiteAlpha.900'}>
      <Link to='/exchange' >Exchanges</Link>
     </Button>
     <Button variant={'unstyled'} color={'whiteAlpha.900'}>
      <Link to='/coins' >Coins</Link>
     </Button>
   </HStack>
  )
}

export default Header