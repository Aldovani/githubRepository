import { useState } from "react";

import api from "./api/index";
import Header from "./components/Header/Header";
import "./App.css";
import Cardrepos from "./components/CardRepos/Cardrepos";

let estatico = {
  language: "html",
  name: "aldovani",
  description: null,
  owner: { login: "aldovani" },
};
function App() {
  const [dados, setDados] = useState();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [repos, setRepos] = useState([]);

  async function getApi(e) {
    e.preventDefault();
    try {
      const response = await api.get(`/users/${input}`);
      const repositories = await api.get(`/users/${input}/repos`);
      setRepos(repositories.data);
      setDados(response.data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="app">
      {!loading && (
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />

          <button type="submit" onClick={getApi} disabled={input === ""}>
            Buscar
          </button>
        </form>
      )}
      {loading && (
        <>
          <button
            className="deletar"
            onClick={() => {
              setLoading(!true);
            }}
          >
            Deletar
          </button>
          <Header dados={dados} />
          <div className="warp-Card-repos">
            {repos.map(function (e) {
              return <Cardrepos key={e.id} repos={e} />;
            })}
          </div>
        </>
      )}
      {/* <div className="warp-Card-repos">
        <Cardrepos repos={estatico} />
        <Cardrepos repos={estatico} />
        <Cardrepos repos={estatico} />
        <Cardrepos repos={estatico} />
      </div> */}
    </div>
  );
}

export default App;
