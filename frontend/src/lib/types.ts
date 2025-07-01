export interface Messages {
  username: string;
  message: string;
  displayTime?: string;
}

export interface UserContextType {
  username: string;
  setUsername: (value: string) => void;
}

export type WebSocketMessage =
  | { type: "history"; messageInfo: Messages[] }
  | { type: "message"; messageInfo: Messages };
