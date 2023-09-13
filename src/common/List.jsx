import { deleteBook } from "../features/library/librarySlice";
import { useDispatch } from "react-redux";

const List = ({ books }) => {
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {books.length > 0 ? (
        books.map((book) => {
          return (
            <li
              key={book.id}
              className="list-group-item list-group-item-light d-flex justify-content-between"
            >
              <span>
                Titre: <strong>{book.title}</strong>
              </span>
              <span>
                Auteur: <strong>{book.author}</strong>
              </span>
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(deleteBook(book.id));
                }}
              >
                X
              </button>
            </li>
          );
        })
      ) : (
        <p className="text-center">Aucun livre à afficher</p>
      )}
    </ul>
  );
};

export default List;
