import React, { createRef, useEffect, useState } from 'react'
import styles from './highlight.module.scss'

const callback: IntersectionObserverCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.filled)
    }
  })
}

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
}

const Highlight: React.FC = ({ children }) => {
  const ref = createRef<HTMLSpanElement>()
  const [animationDuration, setAnimationDuration] = useState<number>(1000)

  useEffect(() => {
    const { current } = ref

    const length = current?.textContent?.length ?? 0
    setAnimationDuration(length * 10)
    const observer = new IntersectionObserver(callback, options)

    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [ref])

  return (
    <span
      ref={ref}
      className={styles.highlight}
      style={{ transitionDuration: `${animationDuration}ms` }}
    >{children}</span>
  )
}

export default Highlight
