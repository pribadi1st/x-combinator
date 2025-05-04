import NextAuth from "next-auth"
import Github from "next-auth/providers/github"

const handler = NextAuth({
    providers: [
        // ...add more providers here
        // https://next-auth.js.org/providers/overview
        Github({
            clientId: process.env.AUTH_GITHUB_CLIENT_ID as string,
            clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET as string,
        })
    ]
})

export { handler as GET, handler as POST }