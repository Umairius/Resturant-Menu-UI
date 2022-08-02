
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MenuCard from './components/MenuCard';

function App() {
  return (
    <div className="App">
        <div className='maincontainer'> 
          <Header></Header>
          <div className='menuContainer'>
            <div className='menuHalf'>
                
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                


            </div>
            <div className='menuHalf'>
            <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                
            </div>
            

          </div>
          <Footer></Footer>

        </div>
    </div>
  );
}

export default App;
