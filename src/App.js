import { useState } from "react";
import { motion } from "framer-motion";

import api from "./api/index";

import Header from "./components/Header/Header";
import Cardrepos from "./components/CardRepos/Cardrepos";

import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [dados, setDados] = useState();
  const [input, setInput] = useState("");
  const [repos, setRepos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [mensagemError, setMensagemError] = useState("");
  const [loading, setLoading] = useState(false);

  async function getApi(e) {
    e.preventDefault();
    setOpenModal(false);
    try {
      setLoading(!true);
      setDados(null);

      const response = await api.get(`/users/${input}`);
      const repositories = await api.get(`/users/${input}/repos`);

      setRepos(repositories.data);
      setDados(response.data);
      setLoading(true);

      setInput("");
    } catch ({ response }) {
      if (response.status === 404) {
        setMensagemError("Usuário não encontrado");
      } else if (response.status === 403) {
        setMensagemError("Falha ao buscar os dados");
      }
      setInput("");
      setOpenModal(true);
    }
  }

  return (
    <div className="app">
      <motion.form
        className="form"
        animate={{ y: [-500, 0] }}
        transition={{ duration: 1 }}
      >
        <motion.input
          initial="hidden"
          placeholder="Login do GitHub"
          animate={{ scale: [0, 1] }}
          transition={{ delay: 1, duration: 1 }}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button type="submit" onClick={getApi} disabled={input === ""}>
          Buscar
        </button>
      </motion.form>

      {loading && (
        <>
          <Header dados={dados} />

          <div className="warp-Card-repos">
            {repos.map(function (e) {
              return <Cardrepos key={e.id} repos={e} />;
            })}
          </div>
        </>
      )}
      {openModal && <Modal mensagem={mensagemError} />}
    </div>
  );
}

export default App;
