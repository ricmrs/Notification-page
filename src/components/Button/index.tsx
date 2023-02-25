import styled from "styled-components";

export default function Button({ children, onClick }: { children: String, onClick: () => void } ){
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
  background: transparent;
  color: var(--color-neutral-dark-grayish-blue);
  font-size: 0.9em;
`