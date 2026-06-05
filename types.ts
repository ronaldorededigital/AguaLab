export interface ReferenceLink {
  title: string;
  url: string;
  description: string;
}

export enum ConnectionState {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  ERROR = 'error',
}

export interface AudioVisualizerState {
  volume: number;
}
