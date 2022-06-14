import './assets/scss/App.scss';

import Header from './Components/Header/Header.tsx';
import SideMenu from './Components/SideMenu/SideMenu.tsx';
import Content from './Components/Content/Content.tsx';

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
