import forumTitulos from "../forumTitulos/forumTitulos.view";

const forumHome = () => {
    return (
        <div className="forumBody">
            <div className="forumHeader">
                <div className="Pesquisa">
                    <div className="col-lg-4">                    
                        <input type="text" placeholder="Informe um campo de pesquisa"/>
                    </div>
                    <div className="col-lg-4">
                        <button type="button">Pesquisa</button>
                    </div>
                    <div className="col-lg-4">
                        <label>Página {} de {} </label>
                    </div>
                </div>                
            </div>
            <div className="forumBody">
                <div className="bodyHeader">
                    <div className="col-lg-2">                    
                        <label>Título | Autor</label>
                    </div>
                    <div className="col-lg-4">
                        <label>Respostas</label>
                    </div>
                    <div className="col-lg-4">
                        <label>Última mensagem</label>
                    </div>
                </div>  
                <div className="forumTitulos">
                    <forumTitulos></forumTitulos>
                </div>                     
            </div>
      </div>
    );
  };
  
  export default forumHome;