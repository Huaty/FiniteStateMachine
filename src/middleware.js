// pages/_middleware.js

import { NextResponse } from "next/server";

export async function middleware(req) {
  // Example of dynamically checking if the user is logged in via cookies
  const sessionToken = req.cookies.get("sessionToken");

  // If the sessionToken is present, the user is considered logged in
  if (sessionToken) {
    return NextResponse.next();
  }

  // Redirect to the root page if the user is not logged in
  // When creating a URL for redirection, you just need to specify the destination path
  return NextResponse.redirect(new URL("/LoginIn", req.url));
}

export const config = {
  matcher: ["/Afterlogin", "/mealyMachine", "/mooreMachine"], // This middleware applies only to the "/Afterlogin" path
};
