# Escopo do Projeto

## Descrição Geral

A aplicação web de To-Do List será desenvolvida utilizando React para o frontend, Node.js para o backend, MongoDB para o banco de dados e JWT para autenticação. O sistema permitirá aos usuários adicionar, editar, excluir e organizar suas tarefas de forma eficiente, enquanto a segurança e a escalabilidade são garantidas pelas tecnologias escolhidas. A aplicação será direcionada a pessoas com a necessidade de criar uma lista de tarefas.

<details>
  <summary><strong>Escopo</strong></summary>

## Objetivos Gerais

- Desenvolver uma interface de usuário intuitiva e responsiva para gerenciamento de tarefas.
- Implementar funcionalidades de CRUD (Create, Read, Update, Delete) para as tarefas.
- Garantir a segurança dos dados e a proteção das informações do usuário.
- Criar uma solução escalável que suporte um número crescente de usuários e tarefas.

## Metas SMART

### Específicas

- Implementar a autenticação de usuários com JWT.
- Desenvolver o frontend com React e o backend com Node.js.
- Utilizar MongoDB para armazenar dados de tarefas e usuários.
- Garantir que a aplicação seja segura, escalável e de fácil uso.

### Mensuráveis

- A aplicação deve suportar até 1000 usuários simultâneos sem degradação do desempenho.
- Cada usuário deve poder gerenciar até 50 tarefas sem problemas de performance.

### Atingíveis

- Criar funcionalidades básicas e avançadas de gerenciamento de tarefas.
- Implementar autenticação segura e controle de acesso.
- Realizar CRUD completo para tarefas e usuários.
- Garantir uma interface responsiva e intuitiva.

### Relevante

- A aplicação deve atender às necessidades de organização e produtividade dos colaboradores da Escola SENAI.
- Facilitar a gestão de tarefas com uma interface moderna e recursos de segurança robustos.

### Temporal

- Desenvolvimento e lançamento da aplicação devem ser concluídos em 2 meses.
- Reuniões de acompanhamento semanais para revisar o progresso e ajustar o cronograma conforme necessário.

## Recursos

- **Frontend**: React
- **Backend**: Node.js
- **Banco de Dados**: MongoDB
- **Autenticação**: JWT
- **Design de Interfaces**: Figma
- **IDE para Desenvolvimento**: VSCode
- **Documentação**: README (GitHub)
- **Controle de Versão**: GitHub

## Recursos Humanos

- **Desenvolvedores Frontend**: 2
- **Desenvolvedores Backend**: 2
- **Desenvolvedor de Banco de Dados**: 1
- **Designer UI/UX**: 1
- **Estagiário**: 1

## Análise de Riscos

### Riscos e Soluções

- **Problemas de Performance**: Implementar técnicas de otimização e escalabilidade, como indexação de banco de dados.
- **Vulnerabilidades de Segurança**: Implementar práticas de segurança recomendadas, como validação de entrada, criptografia de senhas e uso de HTTPS.
- **Desvios no Cronograma**: Monitorar o progresso regularmente e ajustar o cronograma conforme necessário para garantir a entrega no prazo.
- **Incompatibilidade entre Frontend e Backend**: Definir claramente as APIs e realizar testes de integração frequentes.
- **Mudanças nos Requisitos**: Manter uma comunicação constante com os stakeholders e documentar todas as alterações nos requisitos.

</details>
<details>
  <summary><strong>Cronograma do Projeto</strong></summary>

```mermaid
gantt
    title Cronograma do Projeto
    dateFormat  YYYY-MM-DD
    axisFormat  %d-%m-%Y

    section Semana 1: Planejamento e Preparação
    Reunião de Kickoff            :a1, 2024-09-01, 2d
    Análise de Requisitos         :a2, 2024-09-03, 2d
    Planejamento do Projeto       :a3, 2024-09-05, 1d
    Preparação do Ambiente        :a4, 2024-09-06, 2d

    section Semana 2: Design e Protótipos
    Design de Interface           :b1, 2024-09-08, 3d
    Definição da Arquitetura       :b2, 2024-09-11, 2d
    Revisão e Ajustes             :b3, 2024-09-13, 2d

    section Semana 3: Desenvolvimento
    Desenvolvimento de Funcionalidades Básicas :c1, 2024-09-15, 3d
    Desenvolvimento de Funcionalidades Avançadas :c2, 2024-09-18, 2d
    Integração e Testes Iniciais  :c3, 2024-09-20, 2d

    section Semana 4: Testes, Ajustes e Lançamento
    Testes e Depuração            :d1, 2024-09-22, 3d
    Revisão Final e Documentação  :d2, 2024-09-25, 2d
    Preparação para Lançamento    :d3, 2024-09-27, 2d
    Lançamento e Feedback         :d4, 2024-09-29, 2d

```

</details>
<details>
  <summary><strong>Diagramas para Desenvolvimento</strong></summary>

### Diagrama de Classe:

![Diagrama de Classe](doc_img/diagram_classe.png)

### Diagrama de Uso:

![Diagrama de Uso](doc_img/diagram_uso.png)

### Diagrama de Fluxo:

![Diagrama de Fluxo](doc_img/diagram_fluxo_1.png)

#

![Diagrama de Fluxo](doc_img/diagram_fluxo_2.png)

</details><details>
  <summary><strong>Manual de Identidade Visual - Marca</strong></summary>

# Manual de Identidade Visual - Escola SENAI

Este Manual de Identidade Visual é um guia para garantir a consistência e a coerência na aplicação da identidade visual da Escola SENAI. Destina-se a todos os colaboradores envolvidos na criação de materiais e comunicações visuais.

## 1. Introdução

**Objetivo:** Fornecer um guia para assegurar que a identidade visual da Escola SENAI seja aplicada de maneira uniforme em todos os materiais e canais de comunicação.

**Público-alvo:** Funcionários, designers, desenvolvedores e qualquer pessoa responsável pela criação de materiais visuais.

<details>
  <summary><strong>2. Identidade Visual</strong></summary>

### 2.1. Logotipo

**Versão Principal:**

![Logotipo Principal](doc_img/Manual_Ident_Visu/senai.png)

- **Descrição:** Logotipo completo com ícone e texto.

**Versão em Preto e Branco:**

![Logotipo Preto e Branco](doc_img/logotipo_preto_branco.png)

- **Descrição:** Versão monocromática para fundos variados.

**Diretrizes de Uso:**

- **Área de Respiro:** Mantenha uma área mínima de 10% da largura do logotipo ao redor.
- **Tamanho Mínimo:** Não reduzir abaixo de 50px de largura.
- **Alterações:** Não modificar ou adicionar efeitos ao logotipo.

### 2.2. Paleta de Cores

**Cor Primária:**

![Paleta_Cores](doc_img/Manual_Ident_Visu/paleta_cores.png)

**Diretrizes de Uso:**

- **Cor Primária:** Usar para fundos e elementos principais.
- **Cor Secundária:** Ideal para fundos e áreas de destaque.
- **Cor de Destaque:** Usar para chamar a atenção para elementos importantes.

### 2.3. Tipografia

**Fonte Principal:**

- **Nome:** Arial
- **Uso:** Textos de corpo e documentos.

**Fonte Secundária:**

- **Nome:** Georgia
- **Uso:** Cabeçalhos e títulos.

**Diretrizes de Uso:**

- **Arial:** Para textos de corpo e materiais informativos.
- **Georgia:** Para cabeçalhos e títulos, garantindo hierarquia clara.

### 2.4. Ícones e Gráficos

**Estilo:**

- **Nome:** Flat e minimalista

**Diretrizes de Uso:**

- **Ícones:** Manter simplicidade e alinhamento com o estilo visual.
- **Gráficos:** Usar a paleta de cores para garantir a consistência visual.

### 2.5. Imagens e Fotografia

**Estilo:**

- **Descrição:** Profissional e relevante para a educação e formação técnica.

**Diretrizes de Uso:**

- Escolher imagens que representem positivamente a Escola SENAI e suas atividades.
- Evitar imagens de baixa qualidade ou que não estejam alinhadas com a mensagem institucional.

</details>

<details>
  <summary><strong>3. Aplicação da Identidade Visual</strong></summary>

### 3.1. Documentos Oficiais

- **Papel Timbrado:** Utilize o logotipo e as cores primárias.
- **Relatórios e Apresentações:** Manter consistência nas fontes e cores.

### 3.2. Materiais de Marketing

- **Flyers e Brochuras:** Aplicar paleta de cores e ícones definidos.
- **Postagens em Redes Sociais:** Usar diretrizes de cores e tipografia para uniformidade.

### 3.3. Interface Digital

- **Website:** Aplicar logotipo, paleta de cores e tipografia conforme as diretrizes.
- **Aplicativos:** Seguir as diretrizes para cores e fontes, garantindo uma identidade coesa.

</details>

<details>
  <summary><strong>4. Diretrizes e Regras</strong></summary>

**Consistência:** Todos os materiais devem seguir as diretrizes para garantir uma apresentação uniforme da marca.

**Revisões:** O manual deve ser revisado periodicamente para manter-se atualizado.

**Contato:** Para dúvidas ou ajustes, entre em contato com o departamento de design da Escola SENAI.

</details>

<details>
  <summary><strong>5. Conclusão do Manual</strong></summary>

Este Manual de Identidade Visual visa fortalecer a marca da Escola SENAI e assegurar uma apresentação consistente e profissional. Utilize este guia como referência constante para qualquer criação ou atualização relacionada à identidade visual.

</details>
</details>

## Conclusão Geral

Este plano fornece uma base sólida para o desenvolvimento da aplicação web de To-Do List, garantindo que todos os aspectos críticos sejam abordados. Seguir este plano ajudará a assegurar que o projeto seja entregue com sucesso, atendendo às necessidades dos usuários da Escola SENAI e aplicando as melhores práticas de desenvolvimento moderno. Se precisar de mais detalhes ou ajustes específicos, estou aqui para ajudar!
