import axios from "axios";

import { cityCords } from "./ElencoCIttà";
import { LoginAPI } from "./GeneratoreKeys";
import { Messaggio } from "./types";

type ResponseDates = {
  date: string;
  value: number;
};

type ResponseCoord = {
  dates: Array<ResponseDates>;
};

type ResponseData = {
  coordinates: Array<ResponseCoord>;
};

type Response = {
  version: string;
  dateGenerated: string;
  status: string;
  data: Array<ResponseData>;
};

async function MessageChatGPT(cityToSearch: string): Promise<Messaggio> {
  const token = await LoginAPI();

  const coords = cityCords.get(cityToSearch);

  const time = new Date().toLocaleTimeString();
  const date = new Date().toISOString().split("T")[0]; // get current date in YYYY-MM-DD format
  const url = `https://api.meteomatics.com/${date}T${time}Z/t_2m:C/${
    coords
  }/json?access_token=`;

  const response = await axios.get<Response>(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const { value } = response.data.data[0].coordinates[0].dates[0];
  return { text: `${value}`, sender: false };
}

export default MessageChatGPT;
