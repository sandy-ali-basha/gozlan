import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  Typography,
} from "@mui/material";
import { useQuery } from "react-query";
import { _Attributes } from "api/attributes/attributes";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18n";

export default function CAccordion({ data, handleCheked }) {
  const params = useParams();
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    Number(params.attr_id)
  );
  const [selectedValueId, setSelectedValueId] = useState(
    Number(params.attr_value_id)
  );

  const { data: AttrValuesData, isLoading: AttrValuesLoading } = useQuery(
    ["_Attributes_values", selectedCategoryId],
    () =>
      _Attributes
        .getAttributeValues(selectedCategoryId)
        .then((res) => res?.data),
    { enabled: !!selectedCategoryId }
  );

  useEffect(() => {
    setSelectedCategoryId(Number(params.attr_id));
    setSelectedValueId(Number(params.attr_value_id));
  }, [params.attr_id, params.attr_value_id]);

  const handleAccordionChange = (id) => (event, isExpanded) => {
    if (isExpanded) {
      setSelectedCategoryId(id);
    } else {
      setSelectedCategoryId(null);
    }
  };

  const handleRadioChange = (event) => {
    setSelectedValueId(Number(event.target.value));
    handleCheked(selectedCategoryId, event.target.value);
  };

  const { t } = useTranslation("index");

  const lang = localStorage.getItem("i18nextLng");
  const displayLang = lang === "tr" ? "en" : lang;

  return (
    <div>
      {data?.product_attributes?.map((item, idx) => (
        <Accordion
          key={idx}
          expanded={selectedCategoryId === item.id}
          onChange={handleAccordionChange(item.id)}
          sx={{ boxShadow: "none", background: "transparent" }}
        >
          <AccordionSummary
            expandIcon={
              <Typography variant="body1" color="initial">
                {selectedCategoryId === item.id ? "-" : "+"}
              </Typography>
            }
            aria-controls="panel-content"
            id={item.id.toString()}
          >
            {item?.translations?.find((t) => t.locale === displayLang)?.title}
          </AccordionSummary>
          {AttrValuesLoading ? (
            <AccordionDetails>{t("Loading...")}</AccordionDetails>
          ) : (
            <AccordionDetails>
              <RadioGroup value={selectedValueId} onChange={handleRadioChange}>
                {AttrValuesData?.product_attributes_values?.map(
                  (option, idx) => {
                    console.log(lang);
                    return (
                      <>
                        <FormControlLabel
                          sx={{
                            fontSize: 2,
                            borderTop: 1,
                            borderColor: "#dddddd0",
                          }}
                          key={idx}
                          id={option.id}
                          control={<Radio value={option.id} />}
                          label={
                            option.translations?.find(
                              (t) => t.locale === displayLang
                            )?.value
                          }
                        />
                      </>
                    );
                  }
                )}
              </RadioGroup>
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </div>
  );
}
