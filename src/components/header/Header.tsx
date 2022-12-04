import React from "react";
import "./header.css";
import { SearchForm } from "../forms/searchForm/SearchForm";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="user-box">
          <h1>Hello, Emmanuel</h1>
          <p>It's a good day to be tasy</p>
        </div>
        <SearchForm />
      </div>
    </header>
  );
};
