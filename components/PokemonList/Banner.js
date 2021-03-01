import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import Button from 'react-bootstrap/Button'

function Banner({ caughtNumber }) {
  const router = useRouter()

  function handleViewAll() {
    router.push("/my-pokemon")
  }

  return (
    <BannerContainer to="/my-pokemon">
      <PokemonIcon
        priority
        height={130}
        width={130}
        src="/assets/pokemon-icon.png"
      />
      <InfoWrapper>
        <Label>Owned Total</Label>
        <Text>{caughtNumber}</Text>
        <StyledButton
          onClick={handleViewAll}
          size="sm"
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
  justify-content: center;
  gap: 30px;
  margin: auto;
  padding: 0 15px;
`

const PokemonIcon = styled(Image)`
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
  width: 90px;
  margin-top: 10px;
  background-color: #ef5350 !important;
`