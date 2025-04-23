import {NextAuthOptions} from "next-auth"
import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"


const CLIENT_SECRET = process.env.CLIENT_SECRET!
const CLIENT_ID = process.env.CLIENT_ID!


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
       
        console.log("account:", account);
        console.log(" profile:", profile);
    
        if (!profile?.email) {
          console.error(" No email found in profile");
          throw new Error("No profile email");
        }

        return true;
      },
    },
      
}

const handler = NextAuth(authOption)
export {handler as GET, handler as POST }