import { Route, Routes } from 'react-router';

import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
