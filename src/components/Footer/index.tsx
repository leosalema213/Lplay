import { Container, SectionTitle, Link, Links, FooterSection } from './styles'

//const para pegar o ano atual
const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de rpg"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              Simulação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rapido</SectionTitle>
        <Links>
          <li>
            <Link
              to="/#on-sale"
              title="Clique aqui para acessar a seção de promoçôes"
            >
              Promoçoes
            </Link>
          </li>
          <li>
            <Link
              to="/#coming-soon"
              title="Clique aqui para acessar a seção de em-breve"
            >
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </FooterSection>
    </div>
  </Container>
)

export default Footer
