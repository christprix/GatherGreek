export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/create_event", "/create_event/form", "/admin"],
};
