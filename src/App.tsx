import './App.scss';

import Header from './Header/Header.tsx';
import SideMenu from './SideMenu/SideMenu.tsx';
import Content from './Content/Content.tsx';

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
