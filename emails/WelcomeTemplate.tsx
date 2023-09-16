import { CSSProperties } from 'react'
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from '@react-email/components'

interface Props {
  name: string
}

const bodyStyles: CSSProperties = {
  background: 'white',
}

const headingStyles: CSSProperties = {
  fontSize: '32px',
}

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome Abroad!</Preview>
      <Tailwind>
        <Body
          className="bg-white"
          // style={bodyStyles}
        >
          <Container>
            <Text
              className="font-bold text-3xl"
              // style={headingStyles}
            >
              Hello {name}
            </Text>
            <Link href="https://www.google.com">www.google.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
