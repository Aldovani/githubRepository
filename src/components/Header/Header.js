import { motion } from "framer-motion";
import "./style.css";

export default function Header({ dados }) {
  return (
    <motion.div
      className="card-header"
      animate={{ x: [-2000, 0] }}
      transition={{ duration: 1.5}}
    >
      <img className="avatar" src={`${dados.avatar_url}`} alt={`avatar ${dados.login}`} />
      <div className="text-header">
        <h1>{dados.login}</h1>
        {dados.bio === null ? (
          <p>Usuário não contem Bio </p>
        ) : (
          <p>{dados.bio}</p>
        )}
      </div>
      <div className="text-repos">
        <span>{dados.public_repos}</span>
        <p>Repositórios</p>
      </div>
    </motion.div>
  );
}
