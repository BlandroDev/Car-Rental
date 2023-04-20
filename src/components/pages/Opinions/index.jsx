import { Footer } from "src/components/Footer";
import { NavBar } from "src/components/NavBar";
import { SecondBanner } from "src/components/SecondBanner";
import { Testimonials } from "src/components/Testimonials";
import { Helmet } from "react-helmet";
export const Opinions = () => {
  return (
    <section>
      <Helmet>
        <title>Car Rental | Testimonios</title>
      </Helmet>
      <NavBar />
      <Testimonials padding="paddingTestimonialsPage" />
      <SecondBanner />
      <Footer />
    </section>
  );
};
