interface Aluno {
    nome: string
    curso: string
    idade: number

}

const mostrarAlunos = (alunos: Aluno[]): void => {
    alunos.forEach((aluno) => {
        console.log(`Nome: ${aluno.nome} | Curso: ${aluno.curso} | Idade: ${aluno.idade}`)
    })
}