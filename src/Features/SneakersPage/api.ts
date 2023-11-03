import Sneakers, { SneakersId } from "./types/SneakersType";
import { fetchData } from "../../hooks/useFetch";

export const initSneakersList = async (): Promise<Sneakers[]> => {
  try {
    const response = await fetch("/api/sneakers");
    return response.json();
  } catch (error) {
    throw new Error("Ошибка сервера, попробуйте позже");
  }
};

export const addNewSneakers = async (obj: Sneakers): Promise<Sneakers> => {
  try {
    const addNewSneakers = await fetchData("/sneakers", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    return addNewSneakers.json();
  } catch (error) {
    throw new Error("Ошибка сервера, попробуйте позже");
  }
};

export const deleteSneakers = async (id: SneakersId): Promise<number> => {
  try {
    const result = await fetchData(`/sneakers/${id}`, {
      method: "DELETE",
    });
    return result.json();
  } catch (error) {
    throw new Error("Ошибка сервера, попробуйте позже");
  }
};
