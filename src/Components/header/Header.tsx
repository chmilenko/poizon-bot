import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.css";
import { useTelegram } from "../../hooks/useTelegram";
function Header(): JSX.Element {
  const { user, onClose } = useTelegram();
  const navigate = useNavigate();
  console.log(user);

  return (
    <div>
      <div className="header">
        <Button onClick={() => navigate("/")}>
          <img src="/static/2.png" alt="icon" className="headerIcon" />
        </Button>
        <div className="headerRightItems">
          {user?.username ? (
            <span>{user?.username}</span>
          ) : (
            <>
              <a href="https://t.me/poison_discount_bot">ТГ</a>
            </>
          )}
          <Button onClick={() => navigate("/sneakers")}>Каталог</Button>
          <Button onClick={() => navigate("/form")}>Форма</Button>
          <Button onClick={onClose}>Выйти</Button>
        </div>
      </div>
      <div className="application">
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
