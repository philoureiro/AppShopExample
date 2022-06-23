export interface ILogout {
  logout: (accessToken: string) => Promise<void>;
}
