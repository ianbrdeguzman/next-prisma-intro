// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'This is not a POST request' });

  const newContact = JSON.parse(req.body);

  const savedContact = await prisma.contact.create({
    data: newContact
  });

  res.status(200).json(savedContact);
}
