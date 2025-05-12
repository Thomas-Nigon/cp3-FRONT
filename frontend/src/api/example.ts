import { gql } from "@apollo/client";

// put your GraphQL requests here (in one file or different ones)
export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      id
      emoji
      continent {
        name
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query Country($countryId: Float!) {
    country(id: $countryId) {
      name
      id
      emoji
      code
      continent {
        name
      }
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      name
      emoji
      code
      continent {
        id
        name
      }
    }
  }
`;

export const GET_CONTINENTS = gql`
  query Continents {
    continents {
      name
      id
    }
  }
`;
