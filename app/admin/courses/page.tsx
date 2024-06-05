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

export default async function ListCourse({ courses }) {
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
