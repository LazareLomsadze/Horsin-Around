import React from 'react'
import styled from 'styled-components'
import Discordi from '../logos/discord-logo.png'


const Box = styled.div`


`






const Discord = () => {
  return (
    <Box>
        <img src={Discordi} alt='discord'className="invert-[0.7]" />
    </Box>
  )
}

export default Discord