export interface Wine {
  id: string;
  name: string;
  type?: string;
  vintage?: string;
  description?: string;
  imageUrl?: string;
}

export interface Producer {
  id: string;
  name: string;
  location?: string;
  established?: string;
  wines: Wine[];
}