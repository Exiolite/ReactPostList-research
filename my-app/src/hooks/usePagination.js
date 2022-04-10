import {useMemo, useState} from "react";

export const usePagination = (totalPages) => {
  const setPagesArray = useMemo(() => {
    let array = []
    for (let i = 0; i < totalPages; i++) {
      array.push(i+1)
    }
    return array
  }, [totalPages])
  return setPagesArray
}