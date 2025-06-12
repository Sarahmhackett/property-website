import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful sign in
    async signIn({ profile }) {
      //1. connect to DB
      //2. check if user exists
      //3. if not then create user
      //4. return true to allow sign in
    },
    // session call back function that modifies the session object
    async session({ session }) {
      //1. get user from DB
      //2. assign user ID from the session
      //3. return the session
    },
  },
};

export default NextAuth(authOptions);
