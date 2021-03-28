import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import api from "../../api";
import "./style.css";

export default function Cardrepos({ repos }) {
  console.log(repos);
  const [languages, setLanguages] = useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await api.get(
      `https://api.github.com/repos/${repos.owner.login}/${repos.name}/languages`
      );
      console.log(response)
  }, []);

  return (
    <motion.div
      className="card-repos"
      animate={{ x: [-2000, 0] }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="repo-name">
        <a href={`https://github.com/${repos.owner.login}/${repos.name}`}>
          {repos.name}
        </a>
      </h3>

      {/* Icons */}
      <h5>{repos.language}</h5>

      {repos.description == null ? (
        <p className="description -not-description">Sem descrição</p>
      ) : (
        <p className="description">{repos.description}</p>
      )}
    </motion.div>
  );
}
