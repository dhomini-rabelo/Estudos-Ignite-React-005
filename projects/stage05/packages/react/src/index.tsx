import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite-500',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return <Button>Hello World</Button>
}
