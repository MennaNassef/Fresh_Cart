import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export default async function myToken() {
  const cookieStore = await cookies();

  const myToken =
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value;

  const decodedToken=await decode({token:myToken ,secret:process.env.NEXTAUTH_SECRET!})

  console.log(decodedToken);

  if (decodedToken) {
    console.log(decodedToken)
    return decodedToken.token;
  }

  return null;
}