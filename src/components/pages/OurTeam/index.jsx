import { NavBar } from "src/components/NavBar";
import { PeopleCard } from "./components/PeopleCard";
import { team } from "src/data/team";
import { SecondBanner } from "src/components/SecondBanner";
import { Footer } from "src/components/Footer";
import { Helmet } from "react-helmet";
export const OurTeam = () => {
  return (
    <section className="team">
      <Helmet>
        <title>Car Rental | Nuestro equipo</title>
      </Helmet>
      <NavBar />
      <h4 className="team__h4">Talento humano</h4>
      <h1 className="team__h1">Conocé a nuestro equipo</h1>
      <div className="team__content">
        {team.map((people) => (
          <PeopleCard
            src={people.src}
            name={people.nombre}
            job={people.puesto}
          />
        ))}
      </div>
      <SecondBanner />
      <Footer />
    </section>
  );
};
