import { Hero } from "@/sections/hero";
import { ShopifyServices } from "@/sections/shopify-services";
import { Portfolio } from "@/sections/portfolio";
import { Process } from "@/sections/process";
import { Testimonials } from "@/sections/testimonials";
import { WhyGlobify } from "@/sections/why-globify";
import { Industries } from "@/sections/industries";
import { Faq } from "@/sections/faq";
import { Cta } from "@/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ShopifyServices />
      <Portfolio />
      <Process />
      <Testimonials />
      <WhyGlobify />
      <Industries />
      <Faq />
      <Cta />
    </>
  );
}
