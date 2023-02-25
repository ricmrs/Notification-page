import styled from 'styled-components';

export default function NotificationBadge({numberOfNotifications}: {numberOfNotifications: number}){
  return (
    <StyledBadge>
      {numberOfNotifications}
    </StyledBadge>
  )
}

const StyledBadge = styled.span`
  background-color: var(--color-primary-blue);
  color: var(--color-neutral-white);
  padding: 5px 12px;
  border-radius: 20%;
  font-size: 1em;
`