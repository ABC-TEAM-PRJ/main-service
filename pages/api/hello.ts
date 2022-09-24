// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '../../interfaces/user'

type Data = {
  name: string
}

//임시 데이터
const users: User[] = [{id:1},{id:2},{id:3}]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(users)
}
