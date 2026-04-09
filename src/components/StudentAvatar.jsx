import { useEffect, useState } from 'react'

function StudentAvatar({ student, className = '' }) {
  const [src, setSrc] = useState(() => {
    if (student.localImage) return student.localImage
    if (student.imageUrl) return student.imageUrl
    return null
  })

  useEffect(() => {
    if (student.localImage) {
      setSrc(student.localImage)
      return
    }
    if (student.imageUrl) {
      setSrc(student.imageUrl)
      return
    }

    let isActive = true
    const wikiTitle = student.wikiTitle || student.name
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
      wikiTitle,
    )}&prop=pageimages&format=json&pithumbsize=160&origin=*`

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (!isActive) return
        const pages = data?.query?.pages
        const page = pages ? Object.values(pages)[0] : null
        const thumbnail = page?.thumbnail?.source
        setSrc(thumbnail || null)
      })
      .catch(() => {
        if (isActive) setSrc(null)
      })

    return () => {
      isActive = false
    }
  }, [student.localImage, student.imageUrl, student.name, student.wikiTitle])

  if (!src) return null

  return (
    <img
      src={src}
      alt={`${student.name}`}
      className={className}
      loading="lazy"
      onError={() => setSrc(null)}
    />
  )
}

export default StudentAvatar
