import Link from 'next/link'
import styled from '@emotion/styled'

function GridView({ confirmRelease, data = [] }) {
  return (
    <GridListing>
      {
        data.map(item =>
          <CardWrapper key={item.name}>
            <Link href={`/pokemon/${item.name}`} passHref>
              <ListingCard>
                <ImageWrapper>
                  <StyledImage src={item.image} />
                </ImageWrapper>
                <CardText>{item.nickName}</CardText>
                <CardText>({item.name})</CardText>
              </ListingCard>
            </Link>
            <ReleaseButton
              role="button"
              onClick={() => confirmRelease(item)}
            >
              Release
            </ReleaseButton>
          </CardWrapper>
        )
      }
    </GridListing >
  )
}

export default GridView

const GridListing = styled.div`
  display: grid;
  margin: 0 15px;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 920px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 920px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const CardWrapper = styled.div`
  background-color: #fff3cd;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  &:hover {
    border: 2px solid #ef5350;
  }
`

const ListingCard = styled.a`
  text-decoration: none !important;
`

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 100%;
  width: 100%;
`

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: contain;
`

const CardText = styled.h6`
  margin-bottom: 0px;
  line-height: 1.5em;
  height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #856404;
`

const ReleaseButton = styled.div`
  color: white;
  padding: 8px 0;
  width: 100%;
  margin-top: 10px;
  background-color: #ef5350 !important;
`