import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher(["/"]); // Protect the home page (`/`)

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) {
    auth();
  }
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
