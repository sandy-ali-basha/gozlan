import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { _axios } from "../../interceptor/http-config";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function SearchInput({ searchResults, setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      try {
        // Making an API call with axios
        const response = await _axios.get(`/search-by-name`, {
          params: {
            name: searchTerm,
          },
        });

        // Set the search results from the API response
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    }
  };
  const { t } = useTranslation("index");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: 2,
          gap: 1,
          border: 1,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#ddd",
          p: 1,
        }}
      >
        <SearchIcon sx={{ color: "text.primary" }} />

        <InputBase
          placeholder={t("Search…")}
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleSearch} // Trigger search on "Enter"
        />
      </Box>

      {/* Optionally display the search results */}
      {searchResults && searchResults?.length > 0 && (
        <div>
          <h2>{t("Search Results:")}</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
