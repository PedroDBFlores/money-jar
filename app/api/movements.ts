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

export { createMovement, getBalance }