export interface Result {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export interface ResultState {
  response: Response | null;
  list: Result[];
  loading: boolean;
  error: string | null;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  newest: string;
  countNumber: number;
}

export interface RootState {
  globalStates: ResultState;
}

export interface Response {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: Result[];
}

export interface AppProps {
  list: Result[];
}

export interface ButtonProps {
  // 👇️ turn of type checking
  onShowModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
