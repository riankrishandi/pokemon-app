import styled from '@emotion/styled'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'

function CatchModal(props) {
  const {
    error,
    image,
    handleSave,
    loading,
    nameInput,
    onHide,
    setNameInput,
    show,
    success
  } = props

  function handleInputName(e) {
    setNameInput(e.target.value)
  }

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
          Catch Pokemon
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Content>
          <StyledImage
            src={image}
          />
          {
            loading && <>
              <LoadingText>Loading</LoadingText>
              <Spinner animation="border" />
            </>
          }
          {
            !loading && success && <>
              <SuccessText>
                Catching succeed. Please input nick name.
              </SuccessText>
              <StyledInput
                isInvalid={error != "" ? true : false}
                value={nameInput}
                onChange={handleInputName}
                placeholder="Pokemon's name"
              />
            </>
          }
          {
            error !== "" && <ErrorText>{error}</ErrorText>
          }
          {
            !loading && !success && <>
              <FailedText>
                Catching failed. Today is not your lucky day.
              </FailedText>
            </>
          }
        </Content>
      </Modal.Body>
      <Modal.Footer>
        <Footer>
          <SaveButton
            disabled={loading || !success || nameInput == ""}
            onClick={handleSave}
            variant="success"
          >
            Save
          </SaveButton>
          <CloseButton
            onClick={onHide}
            variant="danger"
          >
            Close
          </CloseButton>
        </Footer>
      </Modal.Footer>
    </Modal>
  )
}

export default CatchModal

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

const LoadingText = styled.p`
  font-weight: bold;
`

const SuccessText = styled.p`
  font-weight: bold;
  color: #28a745;
  margin-bottom: 10px;
`

const ErrorText = styled.p`
  color: #ef5350;
  margin-top: 5px;
  margin-bottom: 0px;
`

const StyledInput = styled(Form.Control)`
  width: 250px;
  text-align: center;
  &:focus {
    border-color: #28a745;
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  }
`

const FailedText = styled.p`
  font-weight: bold;
  color: #ef5350;
  margin-bottom: 0px;
`

const Footer = styled.div`
  display: flex;
  gap: 15px;
  margin: 0 auto;
`

const CloseButton = styled(Button)`
  width: 75px;
  background-color: #ef5350 !important;
`

const SaveButton = styled(Button)`
  width: 75px;
`