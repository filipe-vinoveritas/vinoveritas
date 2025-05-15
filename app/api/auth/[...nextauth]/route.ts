import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const adminUser = {
  id: "1",
  email: "admin@admin.com",
  password: "admin123",
  role: "admin"
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        if (credentials.email === adminUser.email && 
            credentials.password === adminUser.password) {
          return adminUser;
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };