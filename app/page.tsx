import Header from "@/components/header";
import Welcome from "@/components/welcome";
import Service from "@/components/services";
import Process from "@/components/process";
import Faqlist from "@/components/faq"
import Value from "@/components/values"
import Journey from "@/components/journey"
import Reviews from "@/components/reviews";
import Social from "@/components/social";
import Footer from "@/components/footer";
import Booking from "@/components/booking"
import { SymptomsSolutions } from "@/components/symptoms-solutions";



export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Service />
      <Process />
      <SymptomsSolutions />
      <Faqlist />
      <Booking />
      <Journey />
      <Value />
      <Reviews />
      <Social />
      <Footer />
    </>
    );
}
