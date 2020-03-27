import React from 'react';

interface Todo {
  title: string;
  description: string;
}

function updatePartialTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
updatePartialTodo(
  {
    title: 'organize desk',
    description: 'clear clutter',
  },
  {
    description: 'throw out trash',
  },
);

function updateRequiredTodo(todo: Todo, fieldsToUpdate: Required<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
updateRequiredTodo(
  {
    title: 'organize desk',
    description: 'clear clutter',
  },
  {
    title: '',
    description: '',
  },
);

const readonlyTodo: Readonly<Todo> = {
  title: 'readonly title',
  description: 'readonly description',
};
// readonlyTodo.description = 'write description ...';
console.log(readonlyTodo.description);

interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
};

console.log(x)

const sym1 = Symbol('key');
console.log(sym1)

export default () => <h2>TypeScript Test Demo Page</h2>;
