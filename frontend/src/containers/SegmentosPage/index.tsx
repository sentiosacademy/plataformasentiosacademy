import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import { AnimatedPage } from '../../components/AnimatedPage';
import { Header } from '../../components/Header';
import { Rodape } from '../../components/Rodape';
import { CourseCard } from '../../components/CourseCard';
import { EloProgressBar } from '../../components/EloProgressBar';
import { MainContent } from '../../components/MainContent';

// Corrigido: Importando todos os componentes necessários do styles
import { 
  SegmentoWrapper,
  SegmentoBanner,
  BannerContent,
  BannerLeftColumn,
  BannerRightColumn,
  PageSubtitle,
  PageTitle,
  PageDescription,
  ContentSection,
  ContainerContent,
  SectionTitle,
  ProgressBarContainer,
  CoursesGrid,
  EmblemWrapper,
  EmblemBackground,
  TextContainer,
  EloTitle,
  EloSubtitle,
  Infolink,
  EmblemImage
} from './styles';

// ... (seus imports de imagens)
import awsImage from '../../assets/images/curso1.png';
import dockerImage from '../../assets/images/curso1.png';
import reactImage from '../../assets/images/curso1.png';
import emblem1 from '../../assets/images/emblemadiamante.png';
import emblem2 from '../../assets/images/emblemamestre.png';
import emblem3 from '../../assets/images/emblemaplatina.png';

// ... (seus dados mockados)
const segmentosData = {
  infraestrutura: {
    title: 'Infraestrutura',
    description: 'Cursos cobrindo desde os fundamentos de redes de computadores e infraestrutura on-premises até a maestria em nuvem (Cloud).',
    elo: { name: 'DIAMANTE', icon: emblem1 },
    progress: { currentElo: { name: 'DIAMANTE', icon: emblem1 }, nextElo: { name: 'MESTRE', icon: emblem2 }, percentage: 30 },
    courses: [ { id: 'aws-cp', title: 'AWS Cloud Practitioner', description: 'Cursos cobrindo desde os fundamentos de redes de computadores e infraestrutura on-premises até a maestria em nuvem (Cloud).', image: awsImage }, { id: 'docker', title: 'Docker: Do Zero à Maestria', description: 'Containerize suas aplicações.', image: dockerImage } ],
  },
  desenvolvimento: {
    title: 'Desenvolvimento',
    description: 'Uma trilha completa que começa com algoritmos e lógica, passa por cursos dedicados a cada linguagem de programação popular, e avança para temas como engenharia e arquitetura de software.',
    elo: { name: 'MESTRE', icon: emblem2 },
    progress: { currentElo: { name: 'MESTRE', icon: emblem2 }, nextElo: { name: 'ORACLE', icon: emblem3 }, percentage: 35 },
    courses: [ { id: 'react-adv', title: 'React Avançado', description: 'Uma trilha completa que começa com algoritmos e lógica, passa por cursos dedicados a cada linguagem de programação popular, e avança para temas como engenharia e arquitetura de software.', image: reactImage } ]
  },
  dados: {
    title: 'Ciência de Dados',
    description: 'Um universo de cursos que inclui desde a estrutura de dados e bancos de dados até especialidades como engenharia de dados, ambientes analíticos, Inteligência Artificial e Machine Learning.',
    elo: { name: 'PLATINA', icon: emblem3 },
    progress: { currentElo: { name: 'PLATINA', icon: emblem3 }, nextElo: { name: 'DIAMANTE', icon: emblem1 }, percentage: 80 },
    courses: []
  }
};

export const SegmentosPage: FC = () => {
  const { segmentoId } = useParams<{ segmentoId: 'infraestrutura' | 'desenvolvimento' | 'dados' }>();
  const segmentoData = segmentoId ? segmentosData[segmentoId] : null;

  if (!segmentoData) { return <div>Segmento não encontrado!</div>; }
  
  const { progress, elo, courses } = segmentoData;

  return (
    <AnimatedPage>
      <SegmentoWrapper>
        <Header />
        <MainContent>
          <SegmentoBanner>
            <BannerContent>
              <BannerLeftColumn>
                <PageSubtitle>SEGMENTO:</PageSubtitle>
                <PageTitle>{segmentoData.title}</PageTitle>
                <PageDescription>{segmentoData.description}</PageDescription>
              </BannerLeftColumn>
              <BannerRightColumn>
                <EmblemWrapper $scaleFactor={0.7}>
                  <EmblemBackground>
                    <TextContainer>
                      <EloTitle>{segmentoData.title}</EloTitle>
                      <EloSubtitle>{elo.name}</EloSubtitle>
                      <Infolink>Entenda sobre o Elo</Infolink>
                    </TextContainer>
                  </EmblemBackground>
                  <EmblemImage src={elo.icon} alt={`Emblema de ${elo.name}`} />
                </EmblemWrapper>
              </BannerRightColumn>
            </BannerContent>
          </SegmentoBanner>
          
          <ContentSection>
            <SectionTitle>SEU PROGRESSO</SectionTitle>
            <ProgressBarContainer>
              <EloProgressBar 
                currentElo={progress.currentElo}
                nextElo={progress.nextElo}
                percentage={progress.percentage}
              />
            </ProgressBarContainer>

            <SectionTitle>CURSOS DISPONÍVEIS</SectionTitle>
            <ContainerContent>
              <CoursesGrid>
                {courses.length > 0 ? (
                  courses.map(course => ( <CourseCard key={course.id} {...course} /> ))
                ) : ( <p>Cursos para este segmento serão adicionados em breve!</p> )}
              </CoursesGrid>
            </ContainerContent>
          </ContentSection>

        </MainContent>
        <Rodape />
      </SegmentoWrapper>
    </AnimatedPage>
  );
};