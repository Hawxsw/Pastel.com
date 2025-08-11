# Animações de Transição de Página

Este projeto agora inclui um sistema completo de animações de transição entre páginas usando Framer Motion.

## Componentes Criados

### 1. PageTransition
Localização: `src/components/ui/page-transition.tsx`

Este componente é responsável por animar as transições entre páginas. Ele detecta automaticamente a mudança de rota e aplica animações específicas para cada página:

- **Página inicial (`/`)**: Fade suave com movimento vertical
- **Página de produtos (`/produtos`)**: Slide da direita para a esquerda
- **Página sobre (`/sobre`)**: Animação de escala
- **Página de contato (`/contato`)**: Slide de baixo para cima
- **Página de checkout (`/checkout`)**: Fade com efeito blur
- **Outras páginas**: Animação padrão de fade com movimento vertical

### 2. AnimatedContainer
Localização: `src/components/ui/animated-container.tsx`

Componente para animar elementos individuais dentro das páginas. Suporta diferentes direções e delays.

**Props:**
- `children`: Conteúdo a ser animado
- `className`: Classes CSS adicionais
- `delay`: Delay antes da animação (em segundos)
- `duration`: Duração da animação (em segundos)
- `direction`: Direção da animação ('up', 'down', 'left', 'right')

**Exemplo de uso:**
```tsx
<AnimatedContainer delay={0.2} direction="up">
  <div>Conteúdo animado</div>
</AnimatedContainer>
```

### 3. LoadingSpinner
Localização: `src/components/ui/loading-spinner.tsx`

Componente de loading que pode ser usado durante transições.

**Props:**
- `size`: Tamanho do spinner ('sm', 'md', 'lg')
- `className`: Classes CSS adicionais

### 4. usePageTransition
Localização: `src/hooks/use-page-transition.ts`

Hook personalizado para gerenciar estados de transição de página.

## Como Usar

### 1. Transições Automáticas
As transições entre páginas já estão configuradas automaticamente no layout principal (`src/app/layout.tsx`). Não é necessário fazer nada adicional.

### 2. Animar Elementos Específicos
Para animar elementos específicos dentro de uma página, use o `AnimatedContainer`:

```tsx
import { AnimatedContainer } from '@/components/ui/animated-container'

export default function MinhaPage() {
  return (
    <div>
      <AnimatedContainer delay={0.1} direction="up">
        <h1>Título animado</h1>
      </AnimatedContainer>
      
      <AnimatedContainer delay={0.2} direction="left">
        <p>Texto animado da esquerda</p>
      </AnimatedContainer>
    </div>
  )
}
```

### 3. Animar Listas
Para animar listas com delays escalonados:

```tsx
{items.map((item, index) => (
  <AnimatedContainer 
    key={item.id} 
    delay={0.1 + (index * 0.1)} 
    direction="up"
  >
    <div>{item.content}</div>
  </AnimatedContainer>
))}
```

## Personalização

### Alterar Animações de Página
Para modificar as animações específicas de cada página, edite a função `getPageVariants` no arquivo `page-transition.tsx`.

### Adicionar Novas Animações
Para criar novas variantes de animação, adicione-as ao objeto `pageVariants` no arquivo `use-page-transition.ts`.

## Dependências

- `framer-motion`: Biblioteca principal para animações
- `next/navigation`: Para detectar mudanças de rota

## Performance

As animações são otimizadas para performance:
- Usam `transform` e `opacity` para animações suaves
- Incluem `will-change` para otimização do navegador
- Animações são desabilitadas em dispositivos que preferem menos movimento 