import { useState } from 'react'
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import Cart from './components/Cart/Cart'
import "./App.css";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false)

	return (
		<>
		{cartIsShown && <Cart onClose={() => setCartIsShown(false)} />}
			<Header onShowCart={() => setCartIsShown(true)} />
			<Product />
		</>
	);
}

export default App;
