import styled from 'styled-components'
import React from 'react'
import Ethersca from '../logos/image3 1.png'




const Box = styled.div`


`



const Etherscan = () => {
  return (
    <Box>
        <img src={Ethersca} alt='etherscan' className="invert-[0.3] w-5/6 !max-w-[63%] ml-3 lg:ml-0" />
    </Box>
  )
}

export default Etherscan