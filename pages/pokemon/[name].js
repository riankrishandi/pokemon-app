import {
  useState,
  useEffect,
  useContext
} from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Alert from 'react-bootstrap/Alert'
import { useRouter } from 'next/router'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { AppContext } from '../../context'
import { usePokemonDetail } from '../../hooks'
import {
  CatchModal,
  Jumbotron
} from '../../components'

export default function PokemonDetail() {
  const {
    checkNickName,
    addPokemon,
    setShowNotif
  } = useContext(AppContext)

  // router
  const router = useRouter()
  const { name } = router.query

  function goToHome() {
    router.push("/")
  }

  // fetch data
  const {
    pokemon = {},
    error,
    loading
  } = usePokemonDetail(name)
  const image =
    pokemon ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` : ""

  // states for modal
  const [catchLoading, setCatchLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState(false)
  const [nameInput, setNameInput] = useState("")
  const [modalError, setModalError] = useState("")

  function handleCatch() {
    setSuccess(false)
    setNameInput("")
    setModalError("")
    setCatchLoading(true)
    setShowModal(true)
  }

  function handleSavePokemon() {
    if (checkNickName(nameInput)) {
      addPokemon({
        id: pokemon.id,
        name,
        nickName: nameInput,
        image
      })
      setShowModal(false)
      setShowNotif(true)
      goToHome()
    } else {
      setNameInput("")
      setModalError("Please use another nick name")
    }
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  useEffect(() => {
    let timer = null

    if (catchLoading && showModal) {
      timer = setTimeout(() => {
        setSuccess(catchPokemon())
        setCatchLoading(false)
      }, 2000)
    }

    return () => clearTimeout(timer)
  }, [catchLoading, showModal])

  return <>
    <Head>
      <title>{name ? name : "Pokemon"}</title>
    </Head>
    {
      loading ? <>
        <br />
        <Spinner animation="border" />
      </> : <>
          {
            error && <>
              <br />
              <StyledAlert
                variant="danger"
              >
                Fetch data failed. Please refesh your page
              </StyledAlert>
            </>
          }
          <StyledImg
            src={image}
          />
          <StyledName>{name}</StyledName>
          <StyledButton
            onClick={handleCatch}
            variant="danger"
          >
            CATCH
          </StyledButton>
          <br />
          <br />
          <br />
          <JumbotronWrapper>
            <JumbotronTitle>General Info</JumbotronTitle>
            <GeneralJumbotron>
              <GeneralWrapper>
                <p>Height</p>
                <BoldText>{pokemon.height}</BoldText>
                <p>Weight</p>
                <BoldText>{pokemon.weight}</BoldText>
                <p>Types</p>
                <BoldText>{formatTypes(pokemon.types)}</BoldText>
              </GeneralWrapper>
            </GeneralJumbotron>
          </JumbotronWrapper>
          <br />
          <br />
          <JumbotronWrapper>
            <JumbotronTitle>Moves</JumbotronTitle>
            <MoveJumbotron>
              <MoveWrapper>
                {
                  pokemon.moves && pokemon.moves.map((item, index) =>
                    <BoldText key={index}>{item.move.name}</BoldText>
                  )
                }
              </MoveWrapper>
            </MoveJumbotron>
          </JumbotronWrapper>
          <br />
          <CatchModal
            show={showModal}
            onHide={handleCloseModal}
            image={image}
            loading={catchLoading}
            success={success}
            nameInput={nameInput}
            setNameInput={setNameInput}
            handleSave={handleSavePokemon}
            error={modalError}
          />
        </>
    }
  </>
}

const StyledImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-bottom: 2px solid rgb(217, 217, 217);
  background-color: #343a40;
`

const StyledName = styled.h2`
  margin-top: 15px;
`

const StyledButton = styled(Button)`
  background-color: #ef5350 !important;
  font-size: 20px;  
  margin-top: 10px;
  width: 170px;   
`

const JumbotronWrapper = styled.div`
  margin: auto;
  width: 90%;
`

const JumbotronTitle = styled.h6`
  font-weight: bold;
  text-align: left;
`

const GeneralJumbotron = styled(Jumbotron)`
  background-color: #fff3cd;
  color: #856404;
`

const GeneralWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  column-gap: 70px;
`

const MoveJumbotron = styled(Jumbotron)`
  background-color: #f8d7da;
  color: #721c24;
`

const MoveWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 920px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const BoldText = styled.p`
  font-weight: bold;
`

const StyledAlert = styled(Alert)`
  margin: 0 15px;
`

function formatTypes(types = []) {
  let str = ""
  types.forEach((item, index) => {
    if (index > 0) {
      str = str + ", " + item.type.name
    } else {
      str = item.type.name
    }
  })

  return str
}

function catchPokemon() {
  return new Date().getMilliseconds() % 2 === 0
}