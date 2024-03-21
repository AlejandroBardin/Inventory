import { AppRouter} from "./router/AppRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistroForm } from './pages/RegistroForm/RegistroForm';
import { LoginForm } from './pages/LoginForm/LoginForm';


function App() {
	return (
		<>
		<AppRouter />
		<div>
		<BrowserRouter>
      <Routes>
        <Route path='/Login' element={<LoginForm/>} />
        <Route path='/Registro' element={<RegistroForm/>} />
      </Routes>
      </BrowserRouter>
  
    </div>
	</>
	);
}

export default App;
