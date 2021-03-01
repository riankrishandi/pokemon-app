import Link from 'next/link'
import styled from '@emotion/styled'

function Listing({ item, lastListElementRef }) {
  return (
    <Link href={`/pokemon/${item.name}`} passHref>
      <ListingCard ref={lastListElementRef}>
        <ImageWrapper>
          <StyledImage src={item.image} />
        </ImageWrapper>
        <CardTitle>{item.name}</CardTitle>
      </ListingCard>
    </Link>
  )
}

function GridView(props) {
  const {
    data = [],
    lastListElementRef
  } = props

  return (
    <GridListing>
      {
        data.map((item, index) => {
          if (data.length === index + 1) {
            return <Listing
              item={item}
              key={index}
              lastListElementRef={lastListElementRef}
            />
          }
          return <Listing item={item} key={index} />
        })
      }
    </GridListing>
  )
}

export default GridView

const GridListing = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 15px;
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

const ListingCard = styled.a`
  text-decoration: none !important;
  background-color: #ef5350;
  border: 2px solid #f8bab9;
  border-radius: 10px;
  &:hover {
    border: 2px solid #bb1411;
  }
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

const CardTitle = styled.h6`
  margin: 5px;
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: white;
`