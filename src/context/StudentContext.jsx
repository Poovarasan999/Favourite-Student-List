import { createContext, useEffect, useMemo, useState } from 'react'
import { studentsData } from '../data/students.js'

export const StudentContext = createContext(null)
const STORAGE_KEY = 'favourite-students'

function getStoredFavourites() {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY)
    if (!storedValue) {
      return []
    }
    const parsed = JSON.parse(storedValue)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function StudentProvider({ children }) {
  const [favouriteStudents, setFavouriteStudents] = useState(
    getStoredFavourites,
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favouriteStudents))
  }, [favouriteStudents])

  function addToFavourites(student) {
    setFavouriteStudents((prevStudents) => {
      const exists = prevStudents.some((item) => item.id === student.id)
      if (exists) {
        return prevStudents
      }
      return [...prevStudents, student]
    })
  }

  function removeFromFavourites(studentId) {
    setFavouriteStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentId),
    )
  }

  const value = useMemo(
    () => ({
      students: studentsData,
      favouriteStudents,
      addToFavourites,
      removeFromFavourites,
    }),
    [favouriteStudents],
  )

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  )
}
