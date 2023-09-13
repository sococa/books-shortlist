import React from "react";
import { deleteAllBooks } from "../features/library/librarySlice";
import { useDispatch } from "react-redux";

const DeleteAllBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteAllBooks());
  };

  return (
    <div className="d-flex justify-content-center mb-5">
      <button className="btn btn-danger mt-4 mb-5" onClick={handleClick}>
        Effacer tous les livres
      </button>
    </div>
  );
};

export default DeleteAllBtn;
