import React, { useState } from 'react'
import data from './Data';
import Menu from './Menu';
import Categories from './Categories';
const allCategories = ['all', ...new Set(data.map((e) => e.category))];
function App() {
  const [menuItems, setMenuItems] = useState(data);
  const filterItem=(category)=>{
    if(category==='all'){
      setMenuItems(data);
      return;
    }
    let newFilterItem=data.filter((e)=>e.category===category);
    setMenuItems(newFilterItem);
  }
  return (
    <div>
     
      <section className='menu section'>
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItem={filterItem} allCategories={allCategories}/>
        <Menu items={menuItems}/>
      </section>
    </div>
  );
}

export default App