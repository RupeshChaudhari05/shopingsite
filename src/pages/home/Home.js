import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import Sidebar from '../../component/Sidebar'
import useFetch from '../../Hooks/useFetch'
import { addCart } from '../../Redux/Actions/addCartData'
import { ToastContainer, toast } from 'react-toastify';

export const Home = () => {

  const { data, loading, error } = useFetch("https://fakestoreapi.com/products");
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cartData.add_cart);
  //console.log(cartData);

  const addItem = (item) => {
    const data = item;
    console.log(cartData)

    const sd = cartData.filter((item) => { return item.id === data.id });
    //console.log(sd)
    if (sd.length == 0) {
      dispatch(addCart(data));
      toast("Sucessfully added to cart")
    } else {
      console.log("Allredy present in cart");
      toast("Allredy present in cart")
    }


  }
  return <>
    <Header />
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">

            <Sidebar />

          </div>
          <div className="col-lg-9">
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="#">
                  <div className="hero__search__categories">
                    All Categories
                    <span className="arrow_carrot-down"></span>
                  </div>
                  <input type="text" placeholder="What do yo u need?" />
                  <button type="submit" className="site-btn">SEARCH</button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="hero__search__phone__text">
                  <h5>+65 11.188.888</h5>
                  <span>support 24/7 time</span>
                </div>
              </div>
            </div>
            <div className='row'>
              {loading ? <h1>Loading...</h1> : data.map((item, i) => {
                return <div className="col-md-3" key={i}>
                  <div className="product__item">
                    <Link to={`/detail/${item.id}`}><img src={item.image} alt={item.title} /></Link>
                    <center><button type='button' className='site-btn-s' onClick={() => addItem(item)}>Add to Cart</button></center>
                    <div className="product__item__text">
                      <h6><a href="#">{item.title}</a></h6>
                      <h5>${item.price}</h5>
                    </div>
                  </div>
                </div>
              })}
              <span>{error}</span>
            </div>


          </div>
        </div>
      </div>
    </section>
    <ToastContainer />
    <Footer />
  </>
}
