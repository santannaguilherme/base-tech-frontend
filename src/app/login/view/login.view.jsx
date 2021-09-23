import Login from "../components/login.component";
import style from "./loginView.module.scss"

const loginView = () => {
  return (
    <div className={style.formBox}>
      <Login></Login>
    </div>
  );
};

export default loginView;
