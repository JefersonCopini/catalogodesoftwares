import { sql } from "@vercel/postgres";

export const revalidate = 0;

export async function getServerSideProps() {
    const { rows } = await sql`SELECT * from courses`;
    return {
        props: {
            courses: rows,
        },
    };
}

export default function ListCourse({ courses }) {
    return (
        <div>
            <h1 className="text-center text-white">Lista de Cursos</h1>
            <table>
                <thead>
                    <tr>
                        <td>Título do Curso</td>
                        <td>Descrição</td>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function NewCourse() {
    async function saveCourse(event) {
        "use server"
        event.preventDefault();
        
        const title = event.target.title.value;
        const description = event.target.description.value;

        // Aqui você pode adicionar a lógica para salvar o curso no banco de dados
        console.log("Acessou a função", { title, description });

        // Exemplo de inserção no banco de dados
        // await sql`INSERT INTO courses (title, description) VALUES (${title}, ${description})`;

        // Redirecionar ou atualizar a página após salvar
        // window.location.reload();
    }

    return (
        <div>
            <h1>Adicionar Novo Curso</h1>
            <form onSubmit={saveCourse}>
                <div>
                    <label>Título do Curso</label>
                    <input type="text" name="title" required />
                </div>
                <div>
                    <label>Descrição</label>
                    <textarea name="description" required></textarea>
                </div>
                <button type="submit">Salvar Curso</button>
            </form>
        </div>
    );
}
