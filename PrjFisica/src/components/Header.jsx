/**
 * Header Component
 *
 * Componente responsável pelo cabeçalho da aplicação de Apresentação Física.
 *
 * Funcionalidades:
 * - Exibe o título principal da aplicação
 * - Apresenta resumo breve sobre o que o site traz
 * - Oferece logo ou ícone visual identificador
 * - Inclui subtítulo descritivo do projeto
 * - Efeito visual ou animação de entrada
 * - Mantém consistência visual com o restante da aplicação
 *
 * @component
 * @returns {JSX.Element} Elemento header renderizado na tela
 */

import forcaExemplo from "../assets/forcaExemplo.gif"

export function Header() {
  return (
    <header>
      <h1>Forças e suas aplicações</h1>

      <h2>
        Existem vários conceitos de forças, mas você sabe o que significa a força para física? <br />
        Aqui você vai aprender como a força está presente
        constantemente no seu dia a dia.
      </h2>

      <img src={forcaExemplo} alt="GIF de duas pessoas se puxando por uma corda" />
    </header>
  );
}
