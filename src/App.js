import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LibraryView from "./features/library/LibraryView";
import FetchBooksView from "./features/fetchBooks/FetchBooksView";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LibraryView />} />
        <Route path="/search" element={<FetchBooksView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
