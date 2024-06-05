export default function NewCourse(){
    function saveCourse(){
        "use server"
        console.log("Acessou a função")
    }
    return(
        
        <div>
            <h1 className="text-white text-center text-4xl"> Cadastrar curso</h1>
            <form>
                <input type="text" name="title" placeholder="Digite o titulo do curso " /> <br></br>
                <input type="text" name="description" placeholder="Digite a Descrição do curso " /><br></br>
                <input type="text" name="url" placeholder="Digite a url do curso " /><br></br>
                <button formAction={saveCourse} className="text-white"> Salvar</button>

            </form>
        </div>
        
        
    )
}