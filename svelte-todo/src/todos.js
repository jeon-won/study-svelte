// https://hoontae24.github.io/4

import { writable } from "svelte/store";
import { v4 } from "uuid";

let _todos = [
  { id: v4(), title: "스벨트 공부", done: false },
  { id: v4(), title: "숨쉬기", done: true },
  { id: v4(), title: "유튜브 보기", done: false },
]

const createTodos = () => {
  const todos = writable(_todos);
  const { subscribe, reset, update: _update } = todos;

  const add = (title) => {
    _update(todos => todos.concat({ id: v4(), title, done: false }));
  }

  const remove = (item) => {
    if(!item) return;
    _update(items => items.filter(_item => _item.id !== item.id));
  }

  const update = (item) => {
    if(!item) return;
    _update(todos => todos.map(_item => (_item.id === item.id ? item : _item)));
  }

  return { subscribe, reset, add, remove, update };
}

export const todos = createTodos();