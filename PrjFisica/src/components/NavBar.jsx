/**
 * NavBar Component
 * 
 * Componente responsável pela barra de navegação da aplicação de Apresentação Física.
 * 
 * Funcionalidades:
 * - Exibe os links para navegação entre seções
 * - Fornece acesso rápido aos tópicos principais
 * - Mantém consistência visual com o restante da aplicação
 * - Facilita a navegação da página
 * 
 * @component
 * @returns {JSX.Element} Elemento nav renderizado na tela
 */

export function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="">Forças</a></li>
                <li><a href="">Gravidade</a></li>
                <li><a href="">Leis de Newton</a></li>
            </ul>
        </nav>
    )
}