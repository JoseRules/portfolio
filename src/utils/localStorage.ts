export function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Error setting item in localStorage:', error)
  }
}

export function getItem(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null')
  } catch (error) {
    console.error('Error getting item from localStorage:', error)
    return null
  }
}