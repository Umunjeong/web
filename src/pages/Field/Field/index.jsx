import { useState, useEffect } from "react";
import { Dev, Field_Box, Field_Grid_Box } from "../../../styles/Field";

import Field_item from "../../../components/field_item/field_item";
import Header from "../../../components/header/header";
import All_search from "../../../components/Field_ Pin_search/Field_Pin_search";

import axiosInstance from "../../../api/token/Intersaptor";
import { Sotre_Field } from "../../../store/store";

function Field() {
  localStorage.removeItem("Field");
  localStorage.removeItem("Field_id");

  const { FetchFieldsData, setFetchFieldsData, FiledSearchData } =
    Sotre_Field();
  const [grop, setGrop] = useState(localStorage.getItem("Grop"));

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:3000/field/",
          {
            params: {
              grop: grop,
              type: FiledSearchData ? 2 : 1,
              text: FiledSearchData ? FiledSearchData : "없음",
            },
          }
        );

        if (response.data.type === "success") {
          if (!response.data.fieldInfo) {
            setFetchFieldsData([]);
            return;
          } else {
            const FieldData = Object.values(response.data.fieldInfo);
            console.log(FieldData);
            setFetchFieldsData(FieldData);
          }
        } else {
          console.error("분야 가져오는중 오류 발생:", response.data);
        }
      } catch (error) {
        console.error("분야 가져오는중 오류 발생:", error);
        setFetchFieldsData([]);
      }
    };

    fetchFields();
  }, [FiledSearchData]);

  return (
    <Dev>
      <Header setGrop={setGrop} />
      <Field_Box>
        <All_search type={"Field"} />
        <Field_Grid_Box>
          {FetchFieldsData.map((field) => {
            return (
              <Field_item
                key={field.id}
                id={field.id}
                name={field.field}
                pincount={field.pincount}
                img={field.img}
              />
            );
          })}
        </Field_Grid_Box>
      </Field_Box>
    </Dev>
  );
}

export default Field;
