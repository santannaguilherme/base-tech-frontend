import style from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <div>
      <div classname={style.inserir}>
        <label classname={style.text}>Conect-se</label>
        <div className={style.comment}>
          <textarea
            className={style.textinput}
            placeholder='Insira sua historia aqui...'
          ></textarea>
        </div>
        <input type='button' value='Enviar' />
        <label className={style.text}>Descubra Histórias: </label>
      </div>
      <div className={style.history}>
        <ul>
          <label>Foto</label>
          <div className={style.perfil}>
            <ul>
              <label>Name</label>
            </ul>
          </div>
          <textarea
            classname={style.textHistory}
            placeholder='Minha historia comeca com o final da dela...'
            readonly
          ></textarea>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
