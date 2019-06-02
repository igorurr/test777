export interface IMessage {
  id: number;
  date: number;
  user: number;
  message: string;
}

export interface IChatStore {
  sendMessageIsLoading: boolean;
  message: string;
  messages: IMessage[];
}
