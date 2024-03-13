import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Dashboard } from './pages/dashboard/Dashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1>Home Page</h1>} />
		
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
