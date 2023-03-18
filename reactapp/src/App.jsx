import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Create, Home, Update, Detail } from "./pages";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
          <Route path="/view/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
  );
}
