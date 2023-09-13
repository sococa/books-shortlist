import Jumbotron from "../../components/Jumbotron";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./fetchBooksSlice";
import Spinner from "../../common/Spinner";
import Alert from "../../common/Alert";
import Card from "../../common/Card";

const FetchBooksView = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const books = useSelector((state) => state.search);

  console.log(books);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(title));
  };

  return (
    <>
      <Jumbotron subtitle="Sujet du livre à rechercher">
        <form
          className="form-inline justify-content-center"
          onSubmit={handleSubmit}
        >
          <input
            value={title}
            type="text"
            className="form-control"
            placeholder="Que rechercher ? "
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className="form-group">
            <button className="btn btn-warning ml-3">Rechercher</button>
          </div>
        </form>
      </Jumbotron>

      <main className="container">
        <div id="accordion">
          {books.isLoading ? (
            <Spinner />
          ) : books.error !== "" ? (
            <Alert>{books.error}</Alert>
          ) : (
            <Card booksArray={books.fetchedBooks} />
          )}
        </div>
      </main>
    </>
  );
};

export default FetchBooksView;
