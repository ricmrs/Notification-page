import Head from 'next/head'
import styles from '@/styles/Home.module.css';
import Title from '@/components/Title';
import NotificationBadge from '@/components/NotificationBadge';
import Button from '@/components/Button';
import { loadNotifications } from '@/lib/load-notifications';
import { INotification } from '@/interfaces/INotification';
import Notification from '@/components/Notification';
import { useState } from 'react';

export default function Home({ notifications }: { notifications: INotification[] }) {
  const [numberOfNotifications, setNumberOfNotifications] = useState(7);
  const [unreadAll, setUnreadAll] = useState(true);

  function markAllAsRead() {
    setNumberOfNotifications(0);
    setUnreadAll(false);
  }

  return (
    <>
      <Head>
        <title>Frontend Mentor | Notifications page</title>
        <meta name="description" content="Notifications page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.wrapper}>
            <Title>Notifications</Title>
            <NotificationBadge numberOfNotifications={numberOfNotifications} />
          </div>
          <Button onClick={markAllAsRead}>Mark all as read</Button>
        </header>
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            {...notification}
            unreadAll={unreadAll}
            numberOfNotifications={numberOfNotifications}
            setNumberOfNotifications={setNumberOfNotifications}
          />
        ))}
      </main>
      <footer style={{textAlign: 'center'}}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.github.com/ricmrs">ricmrs</a>.
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  const notifications = await loadNotifications();
  return {
    props: {
      notifications
    }
  }
}