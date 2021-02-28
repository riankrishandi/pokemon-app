import React from 'react'
import styled from '@emotion/styled'
import Button from 'react-bootstrap/Button'

function Banner({ caughtNumber }) {
  function handleViewAll() {
  }

  return (
    <BannerContainer to="/my-pokemon">
      <PokemonIcon
        src="/assets/pokemon-icon.png"
      />
      <InfoWrapper>
        <Label>Caught Pokemons</Label>
        <Text>{caughtNumber}</Text>
        <StyledButton
          onClick={handleViewAll}
          size="md"
          variant="danger"
        >
          View All
        </StyledButton>
      </InfoWrapper>
    </BannerContainer>
  )
}

export default Banner

const BannerContainer = styled.div`
  background-color: #343a40;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  padding: 0 15px;
`

const PokemonIcon = styled.img`
  height: 130px;
  width: 130px;
  object-fit: contain;
`

const InfoWrapper = styled.div`
  text-align: center;  
  color: white;
`

const Label = styled.p`
  margin-bottom: 10px;
`

const Text = styled.h1`
  font-weight: bold;
`

const StyledButton = styled(Button)`
  width: 100px;
  margin-top: 10px;
  background-color: #ef5350 !important;
`