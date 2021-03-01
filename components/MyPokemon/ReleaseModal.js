import styled from '@emotion/styled'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ReleaseModal(props) {
  const {
    show,
    onHide,
    pokemon = {
      image: "",
      nickName: ""
    },
    handleRelease
  } = props

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="catch-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Release Pokemon
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Content>
          <StyledImage
            src={pokemon.image}
          />
          <StyledP>
            Are you sure to release
            <StyledSpan> {pokemon.nickName} </StyledSpan>
            ?
          </StyledP>
          <ReleaseButton
            onClick={() => {
              handleRelease(pokemon.nickName)
            }}
            variant="danger"
          >
            Release
          </ReleaseButton>
        </Content>
      </Modal.Body>
    </Modal>
  )
}

export default ReleaseModal

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const StyledImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
  border: 2px solid rgb(217, 217, 217);
  border-radius: 5px;
  margin-bottom: 10px;
`

const StyledP = styled.p`
  margin-bottom: 10px;
`

const StyledSpan = styled.span`
  font-weight: bold;
`

const ReleaseButton = styled(Button)`
  width: 75px;
  background-color: #ef5350 !important;
`