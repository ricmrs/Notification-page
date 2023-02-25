export interface INotification {
  id: number
  avatar: { src: string, description: string }
  user: string
  action: string
  time: string
  link?: string
  message?: string
  picture?: { src: string, description: string }
}
