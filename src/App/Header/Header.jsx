import './Header.css';

const Header = () => {
  const pages = [
    { name: "A", href: "null"},
    { name: "B", href: "null"},
    { name: "C", href: "null"}
  ];

  return (
    <header className="App-header">
      <img src="" alt="Logo" />

      <ul className="App-link">
        {pages.map((page,index)=>{
          return(
            <li key={index}>
              <a href={page.href}>{page.name}</a>
            </li>
          );
        })}
      </ul>

      <a className="github" href="null">Github</a>
    </header>
  );
};

export default Header;