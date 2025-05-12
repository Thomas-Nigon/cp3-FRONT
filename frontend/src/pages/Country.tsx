import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_COUNTRY } from "../api/example";

export const Country = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: { countryId: parseInt(id || "0") },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Country with id:{id}</h1>
      <p>{data?.country.name}</p>
      <p>{data?.country.emoji}</p>
      <p>{data?.country.continent.name}</p>
    </div>
  );
};
