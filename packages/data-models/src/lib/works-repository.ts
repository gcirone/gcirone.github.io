import { PrismaClient } from '@prisma/client';

export async function findManyWorks() {
  const client = new PrismaClient();

  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const works = await client.works.findMany();

  return works.map((work: any) => ({
    ...work,
    createdAt: new Intl.DateTimeFormat('en', dateTimeOptions).format(
      work.createdAt
    ),
  }));
}
