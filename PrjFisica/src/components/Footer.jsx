/**
 * Footer Component
 * 
 * Componente responsável pelo rodapé da aplicação de Apresentação Física.
 * 
 * Funcionalidades:
 * - Exibe informações de copyright e ano atual
 * - Apresenta links de navegação importantes
 * - Fornece contato e informações adicionais do projeto
 * - Mantém consistência visual com o restante da aplicação
 * 
 * @component
 * @returns {JSX.Element} Elemento footer renderizado na tela
 */

export function Footer() {
    return (
        <footer>
            <h3>Feito pelo TIME DEV 2026</h3>

            <h4>GitHub</h4>
            <a href="https://github.com/Franca28">Felipe França</a>
            <a href="https://github.com/jtahmartins-dev">João Henrique</a>
            <a href="https://github.com/JMarquesDev">João Pedro</a>
            <a href="https://github.com/guilhermelealdev">Guilherme Fagundes</a>

            <h4>Projeto desenvolvido para o professor José Tiago Toledo do SESI CE-123</h4>
            <a href="https://github.com/jtiagotoledo">GitHub</a>
        </footer>
    )
}