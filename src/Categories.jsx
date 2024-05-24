import React from 'react'

function Categories({ filterItem, allCategories }) {
  return (
    <div className="btn-container">
      {/* {allCategories.map((e,index)=>{
        return <button className='filter-btn' key={index} onClick={()=>filterItem(e)}>
            {e}
        </button>
      })} */}
      {/* <button className="filter-btn" onClick={() => filterItem("breakfast")}>
        Breakfast
      </button>
      <button className="filter-btn" onClick={() => filterItem("all")}>
        All
      </button> */}
      {allCategories.map((e,index)=>{
        return <button className='filter-btn' key={index} onClick={()=>filterItem(e)}>
            {e}
        </button>
      })}
    </div>
  );
}

export default Categories