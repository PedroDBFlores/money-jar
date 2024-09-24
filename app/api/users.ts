import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient()

async function getUser(email: string): Promise<User | undefined> {
    try {
        const user = prisma.user.findFirstOrThrow({
            where: {
                email,
            }
        });
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export { getUser };