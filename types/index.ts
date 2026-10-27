export interface Post {
  id: number;
  titulo: string;
  conteudo: string;
  imagem?: string | null;
  data_criacao?: Date | string | null;
  autor_id: number;
  autor?: {
    id: number;
    nome: string;
    imagem?: string | null;
  };
}

export interface User {
  id: number;
  nome: string;
  email: string;
  tipo: string;
  imagem?: string | null;
  data_criacao?: Date | string | null;
}

export interface CardProps {
  imagem?: string | null;
  titulo: string;
  conteudo: string;
  data_criacao?: string | null;
  autor: string;
  autorImage?: string | null;
  imagemUserComment?: string | null;
}

export interface Team {
  id: number;
  nome: string;
  logo: string;
  categoria: string;
  gender: string;
  cidade?: string;
  curtidas?: number | null;
}

export interface Comment {
  id: number;
  conteudo: string;
  autor: {
    nome: string;
    imagem?: string | null;
  };
  data_criacao: string;
}
