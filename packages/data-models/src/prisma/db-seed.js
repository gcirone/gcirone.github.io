const { PrismaClient } = require('@prisma/client');

(async function dbSeed() {
  const client = new PrismaClient();
  await client.works.deleteMany();

  await client.works.create({
    data: { name: 'Works 1' }
  });

  await client.works.create({
    data: { name: 'Works 2' }
  });
})()
