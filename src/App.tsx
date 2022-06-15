import './assets/scss/App.scss';

import Header from './theme/Components/Header/Header.tsx';
import SideMenu from './theme/Components/SideMenu/SideMenu.tsx';
import Content from './theme/Components/Content/Content.tsx';

function App() {
  return (
    <div className='layout'>
      <SideMenu />
      <div>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
