import { useState, useEffect } from 'react'

function useMediaQuery(query: string) {
  // Menyimpan state untuk status media query
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      // Memperbarui state jika kondisi media query berubah
      setMatches(media.matches)
    }

    const listener = () => {
      setMatches(media.matches)
    }

    // Menambahkan event listener
    media.addEventListener('change', listener)

    // Cleanup function untuk menghapus event listener
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

export default useMediaQuery
