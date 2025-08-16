// Importando os componentes do TanStack Query

import { QueryClient, QueryClientProvider as TanstackProvider } from "@tanstack/react-query";

// Criando uma instância do QueryClient (gerencia o cache, o carregamento e o estado das requisições)

const queryClient = new QueryClient();

// Este componente TanstackProvider passa o queryClient para toda a árvore de componentes abaixo dele (toda a aplicação).
// Com isso, irá permitir que qualquer componente filho acesse o TanQuery

export default function QueryClientProvider({children}){
    return <TanstackProvider client={queryClient}>{children}</TanstackProvider>
}