import Hero from "./components/Hero";
import Professional from "./components/Professional";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Diagnosis from "./components/Diagnosis";
import Offer from "./components/Offer";
import AppointmentForm from "./components/AppointmentForm";
import Location from "./components/Location";
import Authority from "./components/Authority";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Professional />
      <Results />
      <Testimonials />
      <Diagnosis />
      <Offer />
      <AppointmentForm />
      <Location />
      <Authority />
    </main>
  );
}
