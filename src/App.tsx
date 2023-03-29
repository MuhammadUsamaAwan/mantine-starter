import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route index element={<h1>Hello World</h1>} />
    </Routes>
  );
}
