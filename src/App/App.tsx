import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Main from "../Features/MainPage/Main";
import { useTelegram } from "../hooks/useTelegram";
import SneakersList from "../Features/SneakersPage/SneakersList";
import Form from "../Features/Form/Form";
import { useAppDispatch } from "../store";
import { loadSneakersListApi } from "../Features/SneakersPage/SneakersSlice";
import Header from "../Components/header/Header";

function App(): JSX.Element {
  const { tg } = useTelegram();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadSneakersListApi());
  }, [dispatch]);
  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/sneakers" element={<SneakersList />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
