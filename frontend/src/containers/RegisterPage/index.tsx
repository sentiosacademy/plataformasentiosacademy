// ARQUIVO: src/containers/RegisterPage/index.tsx (VERSÃO COMPLETA E CORRIGIDA)

import { useState } from 'react'; // Importamos o useState
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import logoImage from '@/assets/images/LogoPretaSbg.png';
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
  Spinner // Importamos o Spinner
} from './styles';

export function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento

  function handleRegister(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      // Após 2 segundos, navegamos para a página de login
      // A MÁGICA ESTÁ AQUI: passamos um objeto 'state' com nossa mensagem
      navigate('/login', { 
        state: { 
          message: 'Registrado com sucesso! Agora preencha seus dados e comece sua jornada rumo a tecnologia!.' 
        } 
      });
    }, 2000); // Delay de 2 segundos
  }
  
  return (
    <AnimatedPage>
      <Wrapper>
        <LoginCard>
          <LeftColumn>
            <Logo src={logoImage} alt="Logo da Sentios Academy" />
            <Subtitle>Registre-se na Plataforma</Subtitle>

            <Form onSubmit={handleRegister}>
              <Input 
                icon={<FiUser />}
                type="text"
                placeholder="Nome completo"
                required 
              />
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
              <Input 
                icon={<FiLock />}
                type="password" 
                placeholder="Confirme a senha"
                required 
              />
              
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Spinner><FaSpinner /></Spinner> : 'REGISTRAR'}
              </Button>
            </Form>
            <LinksWrapper>
              <span>Já tem uma conta? <AuthLink to="/login">Faça Login</AuthLink></span>
            </LinksWrapper>
          </LeftColumn>
          <RightColumn />
        </LoginCard>
      </Wrapper>
    </AnimatedPage>
  );
}