export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  ogType: string;
}

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

export interface UserType {
  id: string;
  name: string;
  surname: string;
  email: string;
  number: string;
  image: string;
  isLoggedIn: boolean;
}

export interface ChannelType {
  image: string;
  title: string;
  description: string;
}

export interface RegistrationFormType {
  id: string;
  name: string;
  surname: string;
  email: string;
  number: string;
  image: string;
}
