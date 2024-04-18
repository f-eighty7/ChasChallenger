//@ts-nocheck
import { useEffect } from 'react';
import {fetchData} from '../Store/Slices/FetchSlice'
import {useDispatch} from 'react-redux'


export const DungeonMasterChat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData('https://pokeapi.co/api/v2/pokemon/'));
  }, []);
  return (
    <div>
      Chat
      <br />
      <input type="text" placeholder="Prompt..." />
    </div>
  );
};






