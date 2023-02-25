// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { notifications } from '@/data/notifications'
import { INotification } from '@/interfaces/INotification'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<INotification[]>
) {
  res.status(200).json(notifications)
}
