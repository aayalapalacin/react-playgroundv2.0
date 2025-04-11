import {NextAuthOptions} from "next-auth"
import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import {prisma} from "@/lib/primsa"

const CLIENT_SECRET = process.env.CLIENT_SECRET!
const CLIENT_ID = process.env.CLIENT_ID!
// start database: docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres
// migrate database: npx prisma migrate dev
// upgrade database: npx prisma generate

export const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers:[
        GoogleProvider({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET
        })
    ],
    callbacks: {
      async signIn({ account, profile }) {
        console.log("🔐 signIn callback triggered");
        console.log("👉 account:", account);
        console.log("👉 profile:", profile);
    
        if (!profile?.email) {
          console.error("❌ No email found in profile");
          throw new Error("No profile email");
        }
    
        // Skip Prisma logic — just return true
        return true;
      },
    },
      
}

const handler = NextAuth(authOption)
export {handler as GET, handler as POST }