import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o contêiner ocupe toda a altura da viewport */
`;

export const Content = styled.main`
  flex: 1; /* Faz com que o conteúdo principal ocupe o espaço disponível */
`;