import { useState, useEffect } from "react";
import { Dev, Field_Box, Field_Grid_Box } from "../../../styles/Field.js";

import Field_item from "../../../Components/Field/Grid_Item/Grid_Item.jsx";
import Header from "../../../Components/Header/Header.jsx";
import All_search from "../../../Components/Page/Search_Ber/Search_Ber.jsx";

import axiosInstance from "../../../Api/Token/Intersaptor.js";
import { Sotre_Field } from "../../../store/store.js";

function Field() {
  localStorage.removeItem("Field");
  localStorage.removeItem("Field_id");

  const { FetchFieldsData, setFetchFieldsData, FiledSearchData } =
    Sotre_Field();
  const [group, setGroup] = useState(localStorage.getItem("Group"));

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:3000/field/",
          {
            params: {
              group: group,
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
      <Header setGroup={setGroup} />
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
