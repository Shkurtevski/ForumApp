export interface DataType {
  id: string;
  title: string;
  description: string;
  image: string;
  channel: {
    id: string;
    name: string;
    image: string;
    description: string;
  };
}

export interface CardType {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ProfileType {
  id: string;
  image: string;
  isLoggedIn: boolean;
}

export interface ChannelType {
  image: string;
  title: string;
  description: string;
}
