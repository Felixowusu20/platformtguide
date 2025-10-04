// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/wassce-checker(.*)",
  "/my-forms(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth(); // 👈 await here is required!

  if (isProtectedRoute(request) && !userId) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/", // redirect to homepage or another public route
      },
    });
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
