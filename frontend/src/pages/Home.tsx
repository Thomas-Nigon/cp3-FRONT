import { useState } from "react";
import { AllCountries } from "../components/AllCountries.component";
import { ADD_COUNTRY, GET_CONTINENTS, GET_COUNTRIES } from "../api/example";
import { useMutation, useQuery } from "@apollo/client";
import "./Home.css";

interface Continent {
  id: number;
  name: string;
}

export const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    emoji: "",
    code: "",
    continent: 1,
  });
  const [addCountry] = useMutation(ADD_COUNTRY);
  const { data: continentsData } = useQuery(GET_CONTINENTS);
  const { data, loading, error, refetch } = useQuery(GET_COUNTRIES);
  const handleSubmit = () => {
    console.log("submit");
    console.log(formData);
    addCountry({
      variables: {
        data: {
          ...formData,
          continent: formData.continent ? { id: formData.continent } : null,
        },
      },
    }).then(() => {
      refetch();
      setFormData({
        name: "",
        emoji: "",
        code: "",
        continent: 0,
      });
    });
  };
  return (
    <div className="home-container">
      <div className="add-country-form">
        <h1>Add Country</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Emoji"
            onChange={(e) =>
              setFormData({ ...formData, emoji: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Code"
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
          />
          <select
            value={formData.continent}
            onChange={(e) =>
              setFormData({ ...formData, continent: parseInt(e.target.value) })
            }
          >
            <option value="">Select a continent</option>
            {continentsData?.continents.map((continent: Continent) => (
              <option key={continent.id} value={continent.id}>
                {continent.name}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleSubmit}>
            Add a country
          </button>
        </form>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <AllCountries countries={data?.countries} />
    </div>
  );
};
