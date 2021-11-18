import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { adduserFB } from '../redux/modules/user'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  max-width: 540px;
`

const Title = styled.h1``
const Empha = styled.span`
  background: ${(props) => props.color};
`

const Input = styled.input`
  width: 70%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: auto;
`
const Button = styled.button`
  width: 30%;
  border-radius: 10px;
  border: 0;
  background: paleturquoise;
  margin: auto;
`

const Start = ({ setNowUser }) => {
  let user = useRef()
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <Container>
        <Title>
          나는 <Empha color={'yellow'}>뇌브</Empha>에 대해 얼마나 알고 있을까?
        </Title>
        <Input placeholder="내 이름" ref={user} />
        <Link to="/quiz/0">
          <Button
            onClick={() => {
              setNowUser(user.current.value)
              dispatch(adduserFB(user.current.value))
            }}
          >
            시작하기
          </Button>
        </Link>
      </Container>
    </Wrapper>
  )
}

export default Start
