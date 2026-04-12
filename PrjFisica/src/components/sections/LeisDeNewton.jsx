export function LeisDeNewton() {
  return (
    <>
      <h2>LEIS DE NEWTON</h2>

      <section id="explicacao-leis">
        <h3>O que são as leis de Newton?</h3>
        <p>
          As Leis de Newton são os três pilares da mecânica clássica. Publicadas
          por Isaac Newton em 1687, elas descrevem como os objetos se movem e
          como as forças interagem entre si. Basicamente, elas explicam desde
          por que você é jogado para frente quando o ônibus freia até como um
          foguete chega à Lua.
        </p>
      </section>

      <section id="leis-de-newton">
        <section id="leis-de-newton-section">
          <div class="card">
            <div class="dentro">
              <div class="frente">1ª Lei: inércia</div>
              <div class="atras">
                <p>
                  A Lei da Inércia dita que um corpo mantém seu estado atual —
                  seja de repouso ou de movimento retilíneo uniforme — a menos
                  que uma força externa o obrigue a mudar. Essencialmente, os
                  objetos "resistem" a alterações em sua velocidade, e essa
                  resistência é determinada pela sua massa.
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="dentro">
              <div class="frente" id="segunda-lei">
                <p>2ª Lei:</p>
                <p>Princípio Fundamental da Dinâmica</p>
              </div>
              <div class="atras">
                <p>
                  A Segunda Lei diz que a aceleração de um objeto depende da
                  força aplicada e da sua massa:
                </p>
                <br />
                <p id="formula-um">
                  <strong>F = m * a</strong>
                </p>
                <p>
                  Ou seja: mais força = mais aceleração; mais massa = mais
                  esforço para mover.
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="dentro">
              <div class="frente">3ª Lei: Ação e Reação</div>
              <div class="atras">
                <p>
                  A Terceira Lei de Newton estabelece que todas as forças
                  surgem em pares: para cada ação, existe uma reação de mesma
                  intensidade e direção, mas em sentido oposto. Isso significa
                  que, se um corpo A exerce uma força sobre um corpo B, o corpo
                  B reage instantaneamente aplicando uma força idêntica de volta
                  em A, demonstrando que é impossível tocar algo sem ser tocado
                  de volta.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
