import styled from '@emotion/styled'

function Banner({ total = 0 }) {
  return (
    <BannerContainer>
      <Text>My Pokemon ({total})</Text>
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

const Text = styled.h1`
  font-weight: bold;
  color: white;
`