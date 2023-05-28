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
      <NavBar className="navBar__image" title={"Nuestro Equipo"} subtitle={"Nuestro Equipo"}/>
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
