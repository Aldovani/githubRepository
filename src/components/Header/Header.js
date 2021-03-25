import "./style.css";
export default function Header({ dados }) {
  return (
    <header className="card-header">
      <img src={`${dados.avatar_url}`} alt="" />
      <div className="text-header">
        <h1>{dados.login}</h1>
        {dados.bio === null ? (
          <p>Usuário não contem Bio </p>
        ) : (
          <p>{dados.bio}</p>
        )}
      </div>
    </header>
  );
}
