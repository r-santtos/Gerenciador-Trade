import React, { 
  createContext, 
  useState, 
  useContext 
} from 'react';

export const UpdateListContext = createContext();

export default function UpdateListProvider({ children }) {
  const [updateList, setUpdateList] = useState(0)

  return (
      <UpdateListContext.Provider value={{
        updateList,
        setUpdateList,
      }}
    >
      {children}
    </UpdateListContext.Provider>
  );
}

export function useUpdateList() {
  const context = useContext(UpdateListContext);
  const { updateList, setUpdateList } = context;
  return { updateList, setUpdateList};
}