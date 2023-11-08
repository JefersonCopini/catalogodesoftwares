export default function NewCourse(){
    return(
        <div>
            <h1 className="text-white text-center text-4xl"> Cadastrar curso</h1>
            <form>
                <input type="text" placeholder="Digite o titulo do curso " /> <br></br>
                <input type="text" placeholder="Digite a Descrição do curso " /><br></br>
                <input type="text" placeholder="Digite a url do curso " /><br></br>
                <button className="text-white"> Salvar</button>
            </form>
        </div>
    )
}