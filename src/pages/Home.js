import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'glud-component/lib/Button'
import styled from '@emotion/styled'

import { getPostList } from '../actions/action'
import { useStateLoading } from '../hooks'
import Demo from '../components/Demo'

export default function Home() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.list)
  const [loading, callAction] = useStateLoading(['getPost'])

  const handleClickGetPostList = () => {
    callAction('getPost', () => dispatch(getPostList()))
  }

  useEffect(() => {
    callAction('getPost', () => dispatch(getPostList()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('Posts', posts)
  console.log('ENV', process.env)
  console.log('Loading', loading)

  return (
    <Style>
      <Demo name='React' />
      <Button loading={loading.getPost} onClick={handleClickGetPostList}>
        Get Posts
      </Button>
    </Style>
  )
}

const Style = styled('div')`
  label: Home;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
