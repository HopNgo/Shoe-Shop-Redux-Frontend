
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Overlay from './components/Overlay';
import DetailProductPage from './pages/DetaiProductPage';
import HomePage from './pages/HomePage';
import ListProductPage from './pages/ListProductPage';
import SignInPage from './pages/SignInPage';
import { getProducts } from './redux/product/productSlice';
import { getCommentsFn } from './redux/comment/commentSlice';


function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { isShow, ...rest } = cart;
  const jsonCart = JSON.stringify(rest);
  localStorage.setItem('storageCart', jsonCart);
  const commentList = useSelector(state => state.comment);
  useEffect(() => { dispatch(getProducts()); dispatch(getCommentsFn()); }, [dispatch])
  console.log(commentList);

  const showOverlay = useSelector(state => state.overlay);
  const isShowCart = useSelector(state => state.cart.isShow);

  return (
    <div className="App-container">
      {showOverlay.isShow && <Overlay imageUrl={showOverlay.imageUrl} />}
      <Cart isShow={isShowCart} />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/type/:type' element={<ListProductPage />} />
        <Route path='/brand/:brand' element={<ListProductPage />} />
        <Route path='/gender/:gender' element={<ListProductPage />} />
        <Route path='/brand/:brand/:slug' element={<DetailProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
