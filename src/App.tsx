import './assets/scss/App.scss';

import Header from './theme/Components/Header/Header.tsx';
import SiderMenu from './theme/Components/SiderMenu/SideMenu.tsx';
import Content from './theme/Components/Content/Content.tsx';

function App() {
  return (
    <div className='layout'>
      <SiderMenu />
      <main>
        <Header />
        <Content />
      </main>
    </div>
  );
}

export default App;
