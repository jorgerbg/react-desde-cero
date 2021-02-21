import './styles/styles.scss';
import Curso from './Curso'

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img alt="banner" className="main-banner__img" src="https://www.juliusbaer.com/fileadmin/_processed_/8/5/csm_Peoples_Square_ed751964ea.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="#" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso title="React desde cero" price="20 USD"/>
      <Curso title="Html desde cero" price="10 USD"/>
    </div>
  </>
)

export default App;
