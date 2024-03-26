import { ProductsContext } from "./context/ProductsContext";
import { AppRouter} from "./router/AppRouter"


function App() {
	return (
		<>
		<ProductsContext>
		<AppRouter />
		</ProductsContext>
		</>
	);
}

export default App;
