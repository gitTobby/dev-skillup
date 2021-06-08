import { atom, selector } from 'recoil';
import lists from '../data/lists';
import { IList } from '../types/types';

export const keywordState = atom<string>({
  key: 'keywordState',
  default: '',
});

export const selectedState = atom<IList | undefined>({
  key: 'selectedState',
  default: undefined,
});

export const listsState = atom<IList[]>({
  key: 'listsState',
  default: lists,
});

export const filteredListsState = selector({
  key: 'filteredListsState',
  get: ({ get }) => {
    const keyword = get(keywordState);
    const lists = get(listsState);
    return lists.filter((list) => list.name.includes(keyword));
    // return lists.filter((list) => list.name.indexOf(keyword) !== -1) // 차이점 알아보기
  },
});

export const editState = atom<boolean>({
  key: 'editState',
  default: false,
});

export const insertState = atom<boolean>({
  key: 'insertState',
  default: false,
});

export const newItemState = atom<boolean>({
  key: 'newItemState',
  default: false,
});

export const dummyState = atom<IList | undefined>({
  key: 'dummyState',
  default: undefined,
});
