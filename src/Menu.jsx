import React from 'react'

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((e)=>{
        const {img,title,price,desc}=e;
        return (
          <article className="menu-item">
            <img src={img} alt="" className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4>${price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu