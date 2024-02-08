interface User {
  name: string;
  email: string;
}

interface AuthInitialState {
  user: User;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string;
}

export type { User, AuthInitialState };
