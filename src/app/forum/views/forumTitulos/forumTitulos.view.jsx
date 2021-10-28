const forumTitulos = () => {
    return (
        <div className="msgTitulo">
            <div className="col-lg-1" id="imageTitle">
                {
                    condition.fixed == true && <i class="fas fa-comment-dots" style="backgorund-color=yellow"></i> 
                }
                {
                    condition.fixed == false && <i class="fas fa-comment-dots" style="backgorund-color=green"></i> 
                }                    
            </div>
            <div className="col-lg-5" id="title">
                <label>Primeiro teste do forum</label>
            </div>
            <div className="col-lg-3" id="comments">
                <label> {} comentários</label>
            </div>
            <div className="col-lg-3" id="lastMessage">
                <div className="col-lg-4" id="imageUser">
                    {
                        condition.lastMessage.image && <img src="{route}" alt="userImage" />
                         
                    }
                    {
                        condition.lastMessage.image == true && <i class="fas fa-user-slash" style="backgorund-color=yellow"></i> 
                    }
                </div>
                <div className="col-lg-5" id="infoUser">
                    <div className="userName"> {lastMessage.userName} </div>
                    <div className="messageDate"> {lastMessage.messageDate} </div>
                </div>
            </div>            
      </div>
    );
  };
  
  export default forumTitulos;