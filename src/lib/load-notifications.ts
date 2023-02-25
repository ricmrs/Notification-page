import { INotification } from "@/interfaces/INotification"

export async function loadNotifications() {
  const res = await fetch('https://notification-page-ten.vercel.app/api/notifications')
  const data: INotification[] = await res.json()

  return data
}