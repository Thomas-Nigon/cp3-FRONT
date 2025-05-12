import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_COUNTRY } from "../api/example";
import "./Country.css";

export const Country = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: { countryId: parseInt(id || "0") },
  });

  if (loading) return <div className="loading">Loading country details...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="country-countainer">
      <div>
        <h1>{data?.country.name}</h1>
        <p>{data?.country.emoji}</p>
        <p>Country Code: {data?.country.code}</p>
        <p>Continent: {data?.country.continent?.name || "Not specified"}</p>
      </div>
    </div>
  );
};
