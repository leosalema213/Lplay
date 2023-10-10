import * as S from './styles'

//const para pegar o ano atual
const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de rpg"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rapido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              to="/#on-sale"
              title="Clique aqui para acessar a seção de promoçôes"
            >
              Promoçoes
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/#coming-soon"
              title="Clique aqui para acessar a seção de em-breve"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </S.FooterSection>
    </div>
  </S.Container>
)

export default Footer
