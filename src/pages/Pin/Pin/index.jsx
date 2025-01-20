import { useEffect } from "react";
import { Dev, Pin_Box, Pin_Grid_Box } from "../../../styles/Pin.js";

import Pin_item from "../../../Components/Pin/Grid_item/Grid_item.jsx";
import Header from "../../../Components/Header/Header.jsx";
import All_search from "../../../Components/Page/Search_Ber/Search_Ber.jsx";

import axiosInstance from "../../../Api/Token/Intersaptor.js";
import { Sotre_Pin } from "../../../store/store.js";
const apiUrl = import.meta.env.VITE_API_URL;

function Pin() {
  const { FetchPinsData, setFetchPinsData, PinSearchData } = Sotre_Pin();

  useEffect(() => {
    const group = localStorage.getItem("Group");
    const field = localStorage.getItem("Field");

    const fetchPins = async () => {
      try {
        const response = await axiosInstance.get(`${apiUrl}/pin/`, {
          params: {
            group: group,
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
