import { useEffect } from "react";
import { Dev, Pin_Box, Pin_Grid_Box } from "../../../styles/Pin";

import Pin_item from "../../../components/pin_item/Pin_item";
import Header from "../../../components/header/header";
import All_search from "../../../components/Field_ Pin_search/Field_Pin_search";

import axiosInstance from "../../../api/token/Intersaptor";
import { Sotre_Pin } from "../../../store/store";

function Pin() {
  const { FetchPinsData, setFetchPinsData, PinSearchData } = Sotre_Pin();

  useEffect(() => {
    const grop = localStorage.getItem("Grop");
    const field = localStorage.getItem("field");

    const fetchPins = async () => {
      try {
        const response = await axiosInstance.get("http://localhost:3000/pin/", {
          params: {
            grop: grop,
            field: field,
            type: PinSearchData ? 2 : 1,
            text: PinSearchData ? PinSearchData : "없음",
          },
        });

        if (response.data.type === "success") {
          if (!response.data.pinInfo) {
            setFetchPinsData([]);
            return;
          } else {
            const PinData = Object.values(response.data.pinInfo);
            console.log(PinData);
            setFetchPinsData(PinData);
          }
        } else {
          console.error("핀 가져오는중 오류 발생:", response.data);
        }
      } catch (error) {
        console.error("핀 분야 가져오는중 오류 발생:", error);
        setFetchPinsData([]);
      }
    };

    fetchPins();
  }, [PinSearchData]);

  return (
    <Dev>
      <Header></Header>
      <Pin_Box>
        <All_search type={"Pin"}></All_search>
        <Pin_Grid_Box>
          {FetchPinsData.map((pin) => {
            return (
              <Pin_item
                key={pin.id}
                id={pin.id}
                name={pin.pin}
                link={pin.link}
                img={pin.img}
              />
            );
          })}
        </Pin_Grid_Box>
      </Pin_Box>
    </Dev>
  );
}

export default Pin;
