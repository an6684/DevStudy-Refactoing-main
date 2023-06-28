import { useEffect, useState } from 'react';

export function useLocalStorageData() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 데이터를 가져와 card 상태에 설정
    const localStorageData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = JSON.parse(localStorage.getItem(key));
      localStorageData.push(data);
    }
    setCard(localStorageData);
  }, []);

  return card;
}