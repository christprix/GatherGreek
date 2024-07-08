import Image from "next/image";
import { Nav } from "@/components/Nav";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <div className="flex md:flex-row flex-col justify-around items-center m-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <Footer></Footer>
    </div>
  );
}
