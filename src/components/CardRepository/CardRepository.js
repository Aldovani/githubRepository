import "./style.css";
import { motion } from "framer-motion";

export  function CardRepository({ repository }) {

  return (
    <motion.div
      className="card-repos"
      initial={{ x: -2000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="repo-name">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${repository.owner.login}/${repository.name}`}
        >
          {repository.name}
        </a>
      </h3>

      {repository.description && <p className="description">{repository.description}</p>}

      <p className="language">{repository.language}</p>
    </motion.div>
  );
}
