import styled from 'styled-components';
import heroBg from '../../assets/images/backgroundtelainicio4.png';


const EMBLEM_MAX_WIDTH_BASE = 450; // O tamanho máximo que o MAIOR emblema pode ter (em px)
const EMBLEM_MIN_WIDTH_BASE = 250; // O tamanho mínimo que o MAIOR emblema pode ter (em px)

export const SegmentoWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


export const SegmentoBanner = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #24053be1 70%, #1b042c7a) 70%, url(${heroBg});
  background-position: center; 
  height: 440px;
  width: 100%;
  box-shadow: 0px 0px 5px rgba(124, 49, 147, 0.42);
  z-index: 5;
`;

// Corrigido: Renomeado de ContainerContent para BannerContent para evitar conflito de nomes
export const BannerContent = styled.div`
  width: 80%;
  max-width: 1700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BannerLeftColumn = styled.div`
  width: 60%;
`;

export const BannerRightColumn = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

export const PageSubtitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  font-weight: bold;
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};
  margin: 0.5rem 0;
`;

export const PageDescription = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 80%;
`;

export const ContentSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ContainerContent = styled.div`
  width: 80%;
  max-width: 1700px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};
  width: 80%;
  max-width: 1700px;
`;

export const ProgressBarContainer = styled.div`
  width: 80%;
  max-width: 1700px;
  background-color: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


// ESTILIZAÇÃO ELO - BACKGROUND IoNavigateCircleSharp

export const EmblemWrapper = styled.div<{ scaleFactor?: number }>`
  position: relative;
  /* A largura ideal ainda é uma porcentagem, calculada a partir do fator de escala */
  width: ${props => (props.scaleFactor || 1) * 100}%;

  /* O tamanho MÍNIMO agora é proporcional */
  min-width: ${props => `calc(${EMBLEM_MIN_WIDTH_BASE}px * ${props.scaleFactor || 1})`};

  /* O tamanho MÁXIMO agora também é proporcional */
  max-width: ${props => `calc(${EMBLEM_MAX_WIDTH_BASE}px * ${props.scaleFactor || 1})`};
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// 2. ADICIONE ESTE NOVO ESTILO (A "Faixa Colorida")
export const EmblemBackground = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: rgba(15, 23, 42, 0.6); /* Fundo escuro semi-transparente */
  backdrop-filter: blur(5px); /* Efeito de vidro fosco */
  border: 1px solid ${props => props.theme.colors.surface}; /* Borda sutil */
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  padding-left: 90px; 
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EloTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  text-transform: uppercase;
  line-height: 1.2;
  
  /* --- ADIÇÃO PARA O EFEITO NEON --- */
  text-shadow: 0 0 8px ${props => props.theme.colors.accentCyan};
`;

export const EloSubtitle = styled.p`
  font-size: 1.4rem;
  /* ANTES: color: ${props => props.theme.colors.text}; */
  /* DEPOIS: */
  color: ${props => props.theme.colors.textSecondary};
  text-transform: uppercase;
`;

export const Infolink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.accentCyan};
  cursor: pointer;
  margin-top: 2px;

  &:hover {
    text-decoration: underline;
`;

export const EmblemImage = styled.img`
  height: 230px;
  width: 230px;
  position: absolute;
  left: -140px;      /* Move o emblema 40 pixels para a ESQUERDA, para fora da faixa */
  top: 50%;         /* Posiciona o topo do emblema no meio vertical do pai */
  transform: translateY(-50%); /* Ajuste fino para centralizar o emblema perfeitamente na vertical */
`;