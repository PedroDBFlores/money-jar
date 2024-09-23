import { Movement, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createMovement = async (input: Movement) =>
    prisma.movement.create({
        data: input,
    });

const getBalance = async (): Promise<number> => {
    const result = await prisma.movement.findMany();

    const balance = result.reduce((prev, movement) => {
        return movement.isCredit ? prev + movement.amount : prev - movement.amount;
    }, 0)

    return balance;
}

const getLatestContribuiters = async (): Promise<Array<string>> => {
    const latestMovements = await prisma.movement.findMany({
        orderBy: [
            {
                createdAt: 'desc'
            }
        ],
        take: 100,
        where: {
            isCredit: true,
        },
        include: {
            user: true,
        }
    });

    return latestMovements
        .map(movement => `${movement.user.name} contributed on ${movement.createdAt.toDateString()}`)
}


export { createMovement, getBalance, getLatestContribuiters }