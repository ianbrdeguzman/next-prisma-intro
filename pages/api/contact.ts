// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'This is not a POST request' });

  const newContact = req.body;
  console.log(newContact);
  res.status(200).json({ name: 'John Doe' });
}
