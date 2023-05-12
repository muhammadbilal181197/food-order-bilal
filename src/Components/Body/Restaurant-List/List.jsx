import { Container, Box } from '@mui/material'
import React from 'react'
import Card from '../Restaurant-Card/Card'
import '../../../styles/Body/Restaurant-List/List.scss'
import cardsData from '../../../Data/CardsData'

const List = () => {
  return (
    <Container>
        <Box className="listing-head">
            Top Selling
        </Box>
        <Box className="List-wrapper">
            {cardsData.map((content)=>{
            return (
            <Card
            title={content.title}
            description={content.description}
            price={content.price}/>
            )
        })}
        </Box>
    </Container>
  )
}

export default List