import { Routes, Route, useLocation } from 'react-router-dom';

import { LoginPage } from '../containers/LoginPage';
import { RegisterPage } from '../containers/RegisterPage';
import { TelaInicio } from '../containers/TelaInicio';
import { SegmentosPage } from '../containers/SegmentosPage';

export function AppRoutes() {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/inicio" element={<TelaInicio />} />
        <Route path="/segmento/:segmentoId" element={<SegmentosPage />} />
      </Routes>
  );
}