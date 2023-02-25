import { INotification } from "@/interfaces/INotification";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function Notification({ avatar, user, action, time }: INotification) {
  const [unread, setUnread] = useState(true)

  function readNotification(){
    setUnread(!unread)
  }

  return (
    <StyledNotification unread={unread} onClick={readNotification}>
      <Image src={avatar.src} alt={avatar.description} width={40} height={40} />
      <div>
        <p><StyledUser>{user}</StyledUser> <StyledAction unread={unread}>{action}</StyledAction></p>
        <StyledTime>{time}</StyledTime>
      </div>
    </StyledNotification>
  )
}

const StyledNotification = styled.section<{unread: Boolean}>`
  background: ${props => props.unread ? 
      'var(--color-neutral-light-grayish-blue-1)' 
      : 'transparent'};
  width: 100%;
  padding: 15px 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
`

const StyledUser = styled.span`
  font-weight: bold;
`

const StyledAction = styled.span<{unread: Boolean}>`
  color: var(--color-neutral-dark-grayish-blue);
  ${props => props.unread ? `&::after {
    content: '';
    display: inline-block;
    margin-left: 5px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background: var(--color-primary-red);
  }`: ''}
`
const StyledTime = styled.p`
  color: var(--color-neutral-grayish-blue);
`