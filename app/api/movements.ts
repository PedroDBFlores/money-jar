'use server'

import { Movement, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createMovement = async (input: Movement) =>
    await prisma.movement.create({
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
    const latestContribuiters = await prisma.movement.findMany({
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

    return latestContribuiters
        .map(movement => `${movement.user.name} contributed on ${movement.createdAt.toLocaleDateString()} with €${movement.amount}`)
}

const getLatestWithdrawals = async (): Promise<Array<string>> => {
    const latestWithdrawals = await prisma.movement.findMany({
        orderBy: [
            {
                createdAt: 'desc'
            }
        ],
        take: 100,
        where: {
            isCredit: false,
        },
        include: {
            user: true,
        }
    });

    return latestWithdrawals
        .map(movement => `${movement.user.name} withdrew on ${movement.createdAt.toLocaleDateString()} with €${movement.amount}`)
}


export { createMovement, getBalance, getLatestContribuiters, getLatestWithdrawals }