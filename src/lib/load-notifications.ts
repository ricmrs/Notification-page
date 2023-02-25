import { INotification } from "@/interfaces/INotification"

export async function loadNotifications() {
  const res = await fetch('http://localhost:3000/api/notifications')
  const data: INotification[] = await res.json()

  return data
}