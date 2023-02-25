import { Dispatch, SetStateAction } from "react"

export interface INotification {
  id: number
  avatar: { src: string, description: string }
  user: string
  action: string
  time: string
  link?: string
  message?: string
  picture?: { src: string, description: string }
  unreadAll: boolean
  numberOfNotifications: number
  setNumberOfNotifications: Dispatch<SetStateAction<number>>
}