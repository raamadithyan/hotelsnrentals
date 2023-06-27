
import { PrismaAdapter } from "@auth/prisma-adapter"
// import { AuthOptions } from "next-auth/core/types"

import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'


import prisma from '@/app/libs/prismadb'
export const authOptions = {
    adapter :PrismaAdapter(prisma),
    providers:[
        GithubProvider({
    clientId : process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
        }),

        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID as string,
              clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
                }),

    ]
}
