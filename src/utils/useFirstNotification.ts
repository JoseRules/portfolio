import { useEffect } from "react"
import { getItem, setItem } from "./localStorage"
import { notifyEmail } from "./email";

export function useFirstNotification() {

  useEffect(() => {
    const firstNotification = getItem('jfportfolio');
    if (!firstNotification) {
      setItem('jfportfolio', 'true')
      notifyEmail({ name: 'Someone', email: 'john.doe@example.com', message: 'Someone access to your portfolio', authenticated: false })
    }
  }, [])

}