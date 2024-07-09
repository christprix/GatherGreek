import { Nav } from "@/components/Nav";
export default function EventsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Nav></Nav>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
  );
}
