import { HeaderTab } from '@components/HeaderTab';
import React from 'react';

import { Wrapper, Box, Text, Image, BoxVideo } from './styles';

export const Institucional: React.FC = () => {
  return (
    <Wrapper>
      <HeaderTab title="Institucional" />

      <h1>Institucional Multi</h1>
      <Box>
        <Text>
          <p>Criada Em 2002, A Rede Multimercados É Formada Por Um Grupo De Empresários Associados,
            Comprometidos Com A Qualidade E Preços Competitivos, Com Lojas Mais Perto De Você E Um
            Atendimento Exclusivo E Diferenciado, Trazendo Economia E Estreitando O Relacionamento
            Com A Comunidade. O Multimercados Está Mais Próximo Do Consumidor Local, Gerando Ofertas,
            Empregos, Comodidade E Unidade Na Comunicação E Divulgação De Seus Produtos, Serviços E Ofertas.</p>

          <p>Atualmente A Rede Multimercados Conta Com 22 Lojas Em 05 Cidades Da Serra Gaúcha, Caxias Do Sul
            (15 Lojas), Bento Gonçalves (01 Loja), Farroupilha (04 Lojas), Flores Da Cunha (01 Loja) E Canela
            (01 Loja).</p>

          <p>Uma Rede Que Está No Coração Da Comunidade Local, Que Gera Empregos, Ofertas De Produtos,
            Cria Condições De Igualdade Aos Associados Que Podem Comprar Mais Barato E Repassar Estas Vantagens
            Ao Consumidor, E Desenvolve Um Relacionamento De Excelência Com Fornecedores E Parceiros. Tudo Isso
            Para Levar Ao Cliente Final O Nosso Maior Objetivo: Economia Todo Dia. Desta Maneira, O Multimercados
            Compartilha Com As Pessoas Da Nossa Região O Trabalho Com Responsabilidade Social, Respeito E Bom
            Atendimento.</p>
        </Text>
        <Image src="images/institucional15anos.jpg" alt="institucional" />
      </Box>

      <h1>Vídeo Institucional da Rede Multi Mercados</h1>
      <BoxVideo src="https://www.youtube.com/embed/xZPdXlsNHyg" />
    </Wrapper>
  );
}


