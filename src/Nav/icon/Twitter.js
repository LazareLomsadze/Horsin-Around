import React from 'react'
import styled from 'styled-components'
import Twitteri from '../logos/twitter.png'

const Icon = styled.div`

`

const Twitter = () => {
  return (
    <Icon>
        <img src={Twitteri} alt='twitter' className="invert-[0.7]" />
    </Icon>
  )
}

export default Twitter