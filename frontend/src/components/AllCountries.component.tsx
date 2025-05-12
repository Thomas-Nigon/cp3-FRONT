import styles from "./AllCountries.component.module.css";
import { Link } from "react-router-dom";

interface Country {
  id: string;
  name: string;
  emoji: string;
  continent: {
    name: string;
  };
}

export const AllCountries = ({ countries }: { countries: Country[] }) => {
  return (
    <div className={styles.countriesContainer}>
      <h1>Check all countries</h1>
      {countries?.map((country: Country) => (
        <div key={country.id} className={styles.countryCard}>
          <h2>{country.name}</h2>
          <p>{country.emoji}</p>
          <p>{country.continent?.name}</p>
          <Link to={`/country/${country.id}`}>View Country</Link>
        </div>
      ))}
    </div>
  );
};
