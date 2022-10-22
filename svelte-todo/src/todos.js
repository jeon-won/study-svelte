// https://hoontae24.github.io/4

import { writable } from "svelte/store";
import { v4 } from "uuid";

/* Todo 목록 */
let _todos = [
  { id: v4(), title: "스벨트 공부", done: false },
  { id: v4(), title: "숨쉬기", done: true },
  { id: v4(), title: "밥먹기", done: false },
]

const createTodos = () => {
  // Writable 스토어 생성
  const todos = writable(_todos);

  // Writable 스토어가 제공하는 함수 꺼내오기
  //  * _update 함수는 Writable 스토어가 제공하는 함수
  //  * update 함수는 아래에서 재정의할 커스텀 함수
  const { subscribe, reset, update: _update } = todos;

  // Todo 추가 함수
  const add = (title) => {
    _update(todos => todos.concat({ id: v4(), title, done: false }));
  }

  // Todo 제거 함수
  const remove = (item) => {
    if(!item) return;
    _update(items => items.filter(_item => _item.id !== item.id));
  }

  // Todo 수정 함수(_update와는 다르다. _update와는...)
  const update = (item) => {
    if(!item) return;
    _update(todos => todos.map(_item => (_item.id === item.id ? item : _item)));
  }

  // Todo CRUD 관련 함수 리턴
  return { subscribe, reset, add, remove, update };
}

export const todos = createTodos();