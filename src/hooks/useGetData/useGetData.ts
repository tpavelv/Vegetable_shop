import ky from 'ky'
import { useEffect, useState } from 'react'
import type { Products } from '../../types'

export const useGetData = (url: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(false)
  const [data, setData] = useState<Products>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const products = await ky.get(url).json<Products>()
        setData(products)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [url])
  // Проверка заглушек
  //   useEffect(() => {
  //     const getData = async () => {
  //       try {
  //         setTimeout(async () => {
  //           try {
  //             const products = await ky.get(url).json()
  //             setData(products)
  //           } catch (err) {
  //             setError(err)
  //           } finally {
  //             setLoading(false)
  //           }
  //         }, 5000)
  //       } catch (error) {
  //         setError(error)
  //         setLoading(false)
  //       }
  //     }

  //     getData()
  //   }, [url])

  return { data, loading, error }
}
