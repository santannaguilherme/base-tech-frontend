const Questions = () => {

    return(
        <form>
        <h3>Adicionar Questão</h3>

        <div className="form-group">
          <label>Enunciado</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>alternativa</label>
          <input
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Enviar
        </button>
      </form>
    )
}

export default Questions