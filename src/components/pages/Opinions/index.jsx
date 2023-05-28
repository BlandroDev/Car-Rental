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
      <NavBar className="navBar__image" title={"Testimonios"} subtitle={"Testimonios"}/>
      <Testimonials padding="paddingTestimonialsPage" />
      <SecondBanner />
      <Footer />
    </section>
  );
};
