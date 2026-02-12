import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { gqlRequest } from "@/lib/graphql";

const FIND_USER = `
  query FindUser($email: String!) {
    users(where: { email: { equals: $email } }) {
      id
      email
    }
  }
`;

const CREATE_USER = `
  mutation CreateUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
    }
  }
`;

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    /**
     * Runs once per Google sign-in
     */
    async signIn({ user, account }) {
      if (account?.provider !== "google" || !user.email) {
        return false;
      }

      const email = user.email;
      const userName = email.split("@")[0];

      console.log("Google sign-in:", { email, userName });

     /* const data = await gqlRequest<{
        users: { id: string }[];
      }>(FIND_USER, { email });

      if (data.users.length === 0) {
        await gqlRequest(CREATE_USER, {
          data: {
            email,
            userName,
            isEmailVerified: true,
            provider: "google",
            googleId: account.providerAccountId,
          },
        });
      } */

      return true;
    },
  },
};
//@ts-ignore
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };