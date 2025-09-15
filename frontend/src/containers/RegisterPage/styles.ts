// ARQUIVO 1: src/containers/LoginPage/styles.ts (VERSÃO COM LAYOUT FLUIDO)

import styled, { keyframes } from 'styled-components'; // Garanta que 'keyframes' está no import no topo do arquivo
import bgImage from '@/assets/images/background-login.png';
import bgImageRight from '@/assets/images/telaregister.png';


export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.div`
  width: 50%;
  height: 2000px;
  max-height: 80%;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(79, 70, 229, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LeftColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
`;

export const RightColumn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImageRight});
  background-position: center;
  background-size: cover;
  padding: 4%;
`;

export const DecorativeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Logo = styled.img`
  height: 85px; /* Define a altura da logo. Ajuste se necessário. */
  width: 150px; /* A largura se ajustará automaticamente para manter a proporção. */
  padding-bottom: 20px;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
  /* Usando clamp() para margem fluida */
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* Usando clamp() para espaçamento fluido */
  gap: clamp(0.75rem, 2vh, 1.25rem);
`;

export const LinksWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;

  span, a {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 2s linear infinite;
`;

