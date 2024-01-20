import React, { useEffect, useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import SchoolDetails from "../school-details";

const SEARCH_URI = "https://localhost:7291/api/Inse2021/Search";

export const AsyncSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    axios
      .get(`${SEARCH_URI}?NoEscola=${query}`)
      .then((resp) => {
        const items = resp.data;
        setOptions(items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
        setIsLoading(false);
      });
  };
  var selectedOptions = [];

  const filterBy = () => true;

  const selectedSchool = (selected) => {
      if (selected.length > 0) {
        selectedOptions = selected;
        console.log("selectedOptions => ", selectedOptions);
      }
  }

  return (
    <>
      <AsyncTypeahead
        filterBy={filterBy}
        id="AsyncSearch"
        isLoading={isLoading}
        labelKey="noEscola"
        minLength={4}
        onSearch={handleSearch}
        onChange={selectedSchool}
        options={options}
        placeholder="Pesquise por uma escola..."
        renderMenuItemChildren={(option) => (
          <>
            <span>{option.noEscola}</span>
          </>
        )}
      />
    </>
  );
};
