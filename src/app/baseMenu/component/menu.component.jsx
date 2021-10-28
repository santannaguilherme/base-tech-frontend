import style from "./menu.module.scss";

const Menu = () => {
  return (
    <div>
      <nav classname={style.menu}>
        <ul className={style.menuList}>
          <img classname={style.logo} src="../images/BaseTechLogo.png"></img>
          <li className={style.menuListItem}>
            <a className={style.menuLink} href="#">
              Home
            </a>
          </li>
          <li className={style.menuListItem}>
            <a className={style.menuLink} href="#">
              Teste
            </a>
          </li>
          <li className={style.menuListItem}>
            <a href="/forum">Forum</a>
          </li>
          <li className={style.menuListItem}>
            <a className={style.menuLink} href="#">
              Dashboard
            </a>
          </li>
          <li className={style.menuListItem}>
            <input type="text" />
            <input
              className={style.pesquisa}
              type="image"
              src="../images/pesquisa.png"
              alt="Submit"
              width="25"
              height="25"
            />
            <input
              className={style.pesquisa}
              type="image"
              src="../images/sair.jpg"
              alt="Submit"
              width="25"
              height="25"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
