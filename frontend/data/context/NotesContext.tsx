import React, { createContext, useState, useContext } from "react";

interface NotesContextType {
  usersNotes: any;
  setUsersNotes: React.Dispatch<React.SetStateAction<any>>;
}

interface Note {
  date: Date,
  documentId: string,
  userId: string,
  data: Object
  lastUpdated: Date
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function useNotes(): NotesContextType {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("Not in Notes provider");
  }
  return context;
}

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [usersNotes, setUsersNotes] = useState<Array<Note>>([]);

  return (
    <NotesContext.Provider value={{ usersNotes, setUsersNotes }}>
      {children}
    </NotesContext.Provider>
  );
}
