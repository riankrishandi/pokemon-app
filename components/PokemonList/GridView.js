import Link from 'next/link'
import styled from '@emotion/styled'

function Listing({ item, lastListElementRef }) {
  return (
    <ListingCard
      ref={lastListElementRef}
      href={`/`}
    // to={{
    //   pathname: `/pokemon/${item.name}`,
    //   state: {
    //     pokemon: {
    //       name: item.name,
    //       image: item.image
    //     }
    //   }
    // }}
    >
      <ImageWrapper>
        <StyledImage src={item.image} />
      </ImageWrapper>
      {/* <CardTitle>{item.name}</CardTitle> */}
    </ListingCard>
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

const ListingCard = styled(Link)`
  background-color: #ef5350;
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  text-decoration: none !important;
  &:hover {
    border: 2px solid gray;
  };
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