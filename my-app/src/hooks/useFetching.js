import {useState} from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorText, setErrorText] = useState("")

  const fetching = async () => {
    try {
      setIsLoading(true)
      await callback()
    }
    catch (e) {
      setErrorText(e.message)
    }
    finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, errorText]
}