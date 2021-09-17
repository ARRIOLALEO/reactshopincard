import { useState } from "react";

export default function Search(props) {
  const [searchValue, setSearch] = useState("");

  const handleSumit = (evt) => {
    evt.preventDefault();
    alert(`search Value ${searchValue}`);
  };
  return (
    <form onSubmit={handleSumit}>
      <label>
        Product to Search
        <input type="text" value={searchValue} onChange={(e) => setSearch(e.target.value)} />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
}
