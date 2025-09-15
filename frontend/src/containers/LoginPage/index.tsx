// ARQUIVO: src/containers/LoginPage/index.tsx (VERSÃO FINAL COM MENSAGEM FLASH)

import { useState, useEffect } from 'react'; // 1. IMPORTE O 'useEffect'
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import logoImage from '../../assets/images/LogoPretaSbg.png';
import { AnimatedPage } from '../../components/AnimatedPage';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { AuthLink } from '../../components/AuthLink';

import { 
  Wrapper, 
  LoginCard, 
  LeftColumn, 
  RightColumn,
  Logo, 
  Subtitle,
  Form,
  LinksWrapper,
  Spinner,
  SuccessMessage
} from './styles';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // 2. CRIAMOS UM ESTADO LOCAL PARA CONTROLAR A MENSAGEM
  const [message, setMessage] = useState('');

  // 3. A MÁGICA ACONTECE AQUI, NO useEffect
  useEffect(() => {
    // Verificamos se há uma mensagem no estado da rota
    if (location.state?.message) {
      // Se houver, copiamos para o nosso estado local
      setMessage(location.state.message);
      // E imediatamente limpamos o estado do histórico do navegador
      window.history.replaceState({}, '');
    }
  }, [location.state]); // O hook só executa se o estado da rota mudar

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate('/inicio');
    }, 3000); 
  }
  
  return (
    <AnimatedPage>
      <Wrapper>
        <LoginCard>
          <LeftColumn>
            <Logo src={logoImage} alt="Logo da Sentios Academy" />
            <Subtitle>Acesse Sua Plataforma</Subtitle>
            
            {/* 4. RENDERIZAMOS A MENSAGEM A PARTIR DO NOSSO ESTADO LOCAL */}
            {message && <SuccessMessage>{message}</SuccessMessage>}

            <Form onSubmit={handleLogin}>
              <Input 
                icon={<FiMail />}
                type="email" 
                placeholder="Email do Agente"
                required 
              />
              <Input 
                icon={<FiLock />}
                type="password" 
                placeholder="Senha Secreta"
                required 
              />
              
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Spinner><FaSpinner /></Spinner> : 'ACESSAR ACADEMY'}
              </Button>
            </Form>

            <LinksWrapper>
              <span>Não tem cadastro? <AuthLink to="/register">Crie sua conta.</AuthLink></span>
              
            </LinksWrapper>
            <AuthLink to="/forgot-password">Esqueceu a senha?</AuthLink>
          </LeftColumn>
          <RightColumn />
        </LoginCard>
      </Wrapper>
    </AnimatedPage>
  );
}