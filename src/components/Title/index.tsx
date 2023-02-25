import styled from 'styled-components';

interface ITitle {
  children: string
}

export default function Title({ children }: ITitle){
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}

const StyledTitle = styled.h1`
  font-size: 1.5em;
`
