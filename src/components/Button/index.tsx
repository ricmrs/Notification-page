import styled from "styled-components";

export default function Button({ children }: { children: String } ){
  return (
    <StyledButton>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
  background: transparent;
  color: var(--color-neutral-dark-grayish-blue);
  font-size: 0.9em;
`