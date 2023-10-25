import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  id: number
  email: string
  fullName: string
  phoneNumber: string
  token: string
  role: string
  errCode?: string
  errMsg?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req
  let result
  if (body.email == 'admin@admin.org' && body.password == 'password') {
    result = {
      id: 123,
      email: 'admin@admin.org',
      fullName: 'Web Administrator',
      phoneNumber: '+628080808080',
      image: 'https://ui-avatars.com/api/?name=Web+Administrator',
      token:
        'FnZwAV/5ObvouIQeVFpzLs6rVka2R1CQeekyMmqzSXX3h8ORxcXUrvumQ9+Oi/jbktEXuICgo88p6BMXs31TUQ==',
      role: 'admin',
    }
  } else {
    result = { errCode: '405', errMsg: 'Unauthorized' }
  }
  return res.status(200).json(result)
}
