import { Route, Routes } from 'react-router';

import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import CoursePage from 'pages/CoursePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/course/:id" element={<CoursePage />} />
      </Route>
    </Routes>
  );
}
