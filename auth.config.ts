import { sql } from '@vercel/postgres';
import { User } from '@prisma/client';
import { NextAuthConfig } from 'next-auth';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request}) {
      const isLoggedIn = !!auth?.user;
      if (isLoggedIn) {
        return true;
      }
      return false; // Redirect unauthenticated users to login page
    },
    signIn: ({user}) => {
      return true;
    },
    redirect: ({ url, baseUrl }) => {
      return Promise.resolve(baseUrl)
    },
    async session({ session }) {
      const user = await getUser(session?.user?.email);
      if (user) {
        session.isAdmin = user.isAdmin;
      }
      return session
    },
  },
  providers: [], // Add providers with an empty array for now
};