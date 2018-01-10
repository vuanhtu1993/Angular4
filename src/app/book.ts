export interface Book {
  id: number;
  name: string;
  active: boolean;
}

export const bookList: Book[] = [
  { id: 1,
    name: 'JavaScript',
    active: true
  },
  { id: 2,
    name: 'Eloquent JavaScript',
    active: true
  },
  { id: 3,
    name: 'Understand TypeScript',
    active: false
  },
  { id: 4,
    name: 'TypeScript Advanced',
    active: false
  },
];
