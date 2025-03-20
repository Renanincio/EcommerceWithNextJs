import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET || "your_secret_key",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID || "",
      clientSecret: process.env.APPLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      console.log("JWT Callback Input:", { token, user, account, profile });

      if (account && user) {
        token.id = user.id ?? profile?.sub;
        token.name = user.name ?? profile?.name;
        token.email = user.email ?? profile?.email;
      }
      console.log("JWT Callback Output:", token);
      return token;
    },
    async session({ session, token }) {
      console.log("Session Callback Input:", { session, token });

      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
      };

      console.log("Session Callback Output:", session);
      return session;
    },
  },
});