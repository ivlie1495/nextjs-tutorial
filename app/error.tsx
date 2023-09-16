'use client'

interface Props {
  error: Error
  reset: () => void
}

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <>
      <div>An unexpected error has occured. {error.message}</div>
      <button className="btn" onClick={reset}>
        Retry
      </button>
    </>
  )
}

export default ErrorPage
