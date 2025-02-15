import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../Redux/category'
const Menu = () => {
  const selectedcategory = useSelector((state) => state.SelectedCategory.value);
  const storeItems = useSelector((state)=> state.shopData.value);
  const offers = useSelector((state)=> state.adData.value);
  const categories = useSelector((state)=> state.Categories.value);
  const dispatch = useDispatch();
  // const offers = [
  //   {title:'Upgrade to VIP++ from VIP',discount:'20%',image:'mvpstarless3.jpg',button:'Upgrade Now',buttonlink:'#'},
  //   {title:'Upgrade from VIP+ to VIP++',discount:'15%',image:'mvpstarless3.jpg',button:'Upgrade Now',buttonlink:'#'},
  // ]
  // const categories = [{name:'All',id:0},{name:'VIP Packages',id:1},{name:'Armour and Attire',id:2},{name:'Weapons and Ammunition',id:3},{name:'Construction and Tools',id:4}]
  // const storeItems = [{name:'Delicious Pizza',preview_description:'VIP',description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',price:20,image:'f1.png',id:'3214abc',category:'All'}]
  return (
    <>
    <section className="offer_section layout_padding-bottom">
    <div className="offer_container">
      <div className="container ">
        <div className="row">
          {offers && offers.map((each,index)=> <div key={index} className="col-md-6">
            <div className="box ">
              <div className="img-box">
                <img src={each.image} alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  {each.title}
                </h5>
                <h6>
                  <span>{each.discount}</span> Off
                </h6>
                <a href={each.buttonlink}>
                  {each.button}
                </a>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  </section>


  <section className="food_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Shop
        </h2>
      </div>
      <ul className="filters_menu">
        {categories.map(each=><li className={each.name===selectedcategory ? 'active' : 'inactive'} key={each.id} onClick={()=>dispatch(change(each.name))}>{each.name}</li>)}
      </ul>

      <div className="filters-content">
        <div className="row grid">
          {storeItems && storeItems.map((each,index)=>{
            const FilterLogic = (selectedcategory==='All' || each.category===selectedcategory)
            return FilterLogic && (<div key={index} className="col-sm-6 col-lg-4 all items">
            <div className="box">
              <div>
                <div style={{backgroundColor:'white'}} className="img-box">
                  <img src={each.image} alt=""/>
                </div>
                <div className="detail-box">
                  <h5>
                    {each.name}
                  </h5>
                  <p>
                    {each.preview_description}
                  </p>
                  <div className="options">
                    <h6>
                      ${each.price}
                    </h6>
                    <a href="">
                      <img height='40px' src='buyicon.png'/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>)})}
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>
  </>
  )
}

export default Menu