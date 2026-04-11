import { LeisDeNewton } from "./sections/LeisDeNewton";
import "./sections/sections.css"

/**
 * Main Component
 *
 * Componente responsável pelo conteúdo principal
 * da aplicação de Apresentação Física.
 *
 * Funcionalidades:
 * - Exibe as seções da página com os conteúdos
 * - Contém os componentes utilizados para representar cada assunto
 * - Oferece exemplos práticos e visuais dos conceitos
 * - Permite interatividade com os conteúdos educacionais
 * - Estrutura responsiva e adaptável a diferentes telas
 * - Scroll suave entre seções
 * - Mantém consistência visual com o restante da aplicação
 *
 * @component
 * @requires Forcas - Seção sobre Forças Físicas
 * @requires Gravidade - Seção sobre Gravidade
 * @requires LeisDeNewton - Seção sobre Leis de Newton
 * @returns {JSX.Element} Elemento footer renderizado na tela
 */

export function Main() {
  return (
  <main>
      <LeisDeNewton/>
  </main >
  );
}
