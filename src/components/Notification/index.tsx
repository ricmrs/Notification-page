import { INotification } from "@/interfaces/INotification";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Notification({
  avatar, user, action, time, link, message, picture,
  unreadAll,
  numberOfNotifications, setNumberOfNotifications }: INotification) {

  const [unread, setUnread] = useState(true);

  useEffect(() => {
    setUnread(unreadAll)
  }, [unreadAll])

  function readNotification() {
    if (unread) {
      setUnread(false);
      setNumberOfNotifications(--numberOfNotifications)
    }
  }

  return (
    <StyledNotification unread={unread} onClick={readNotification}>
      <Image src={avatar.src} alt={avatar.description} width={40} height={40} />
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div>
          <p>
            <StyledUser href={'#'}>{user}</StyledUser>
            <StyledAction unread={unread}>
              {action}
              {link && <StyledLink href={'#'}>{link}</StyledLink>}
            </StyledAction>
          </p>
          <StyledTime>{time}</StyledTime>
          {message && <StyledMessage href={'#'}>{message}</StyledMessage>}
        </div>
        {picture && <Link href={'#'}><Image src={picture!.src} alt={picture!.description} width={40} height={40} /></Link>}
      </div>
    </StyledNotification>
  )
}

const StyledNotification = styled.section<{ unread: Boolean }>`
  background: ${props => props.unread
    ? 'var(--color-neutral-light-grayish-blue-1)'
    : 'transparent'};
  width: 100%;
  padding: 15px 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
`

const StyledUser = styled(Link)`
  color: var(--color-neutral-very-dark-blue);
  font-weight: bold;
  margin-right: 4px;

  &:hover {
    color: var(--color-primary-blue);
  }
`

const StyledAction = styled.span<{ unread: Boolean }>`
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
const StyledLink = styled(Link)`
  color: var(--color-neutral-dark-grayish-blue);
  font-weight: bold;
  display: inline;
  margin-left: 4px;

  &:hover {
    color: var(--color-primary-blue);
  }
`

const StyledTime = styled.p`
  color: var(--color-neutral-grayish-blue);
`

const StyledMessage = styled(Link)`
  border: 1px solid var(--color-neutral-dark-grayish-blue);
  border-radius: 3px;
  padding: 10px;
  margin-top: 5px;
  color: var(--color-neutral-dark-grayish-blue);
  display: inline-block;

  &:hover {
    background: var(--color-neutral-light-grayish-blue-1);
  }
`