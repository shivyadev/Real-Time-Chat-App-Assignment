export interface Messages {
  username: string;
  message: string;
  displayTime?: string;
}

export type WebSocketMessage =
  | { type: "history"; messageInfo: Messages[] }
  | { type: "message"; messageInfo: Messages };
