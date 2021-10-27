import style from "./menu.modules.scss";
const Menu = () => {
  return (
    <div>
      <nav classname={style.menu}>
        <ul>
          <img classname={style.logo} src='../images/BaseTechLogo.png'></img>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Teste</a>
          </li>
          <li>
            <a href='#'>Forum</a>
          </li>
          <li>
            <a href='#'>Dashboard</a>
          </li>
          <li>
            <input type='text' />
            <input
              className={style.pesquisa}
              type='image'
              src='../images/pesquisa.png'
              alt='Submit'
              width='25'
              height='25'
            />
            <input
              className={style.pesquisa}
              type='image'
              src='../images/sair.jpg'
              alt='Submit'
              width='25'
              height='25'
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
