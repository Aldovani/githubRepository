import "./style.css";
export default function Cardrepos({ repos }) {
  console.log(repos);

  return (
    <div className="card-repos">
      <h3 className="repo-name">{repos.name}</h3>

      <h5>{repos.language}</h5>

      {repos.description == null ? (
        <p className="description -not-description">Sem descrição</p>
      ) : (
        <p className="description">{repos.description}</p>
      )}
    <a className="link" href={`https://github.com/${repos.owner.login}/${repos.name}`} ><p>Link</p></a>
    </div>
  );
}
