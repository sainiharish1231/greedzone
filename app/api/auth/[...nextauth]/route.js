import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import AuthService from "../../../../services/AuthService";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const handler = NextAuth({
  debug: true,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      async authorize(credentials, req) {
        const resp = await AuthService.login(credentials);
        const data = await resp.data;
        if (data.token && data.user) {
          return {
            ...data.user,
            image: data.user.image,
            email: `${data.user.email}:::::${data.token}:::::${data.user.id}:::::${data.user.isAdmin} `,
            abc: data.token,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async session({ session, user }) {
      const [email, tokenVal, id, isAdmin] = (session.user?.email || "").split(
        ":::::"
      );

      if (user) {
        user.email = email;
        user.id = id;
      }

      if (session.user) {
        session.user.email = email;
        // @ts-ignore
        session.user.token = tokenVal;
        // @ts-ignore
        session.user.id = id;
        // @ts-ignore
        session.user.isAdmin = isAdmin;
      }

      const sessionData = {
        ...session,
        ...session.user,
      };
      return sessionData;
    },
    async jwt({ token }) {
      return token;
    },
  },
});
export { handler as GET, handler as POST };
