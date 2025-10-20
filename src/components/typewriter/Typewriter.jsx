import useTypeWriter from '../../hooks/useTypewriter'

function Typewriter({ lines, speed }) {
  const displayedLines = useTypeWriter(lines, speed)

  return (
    <>
      {displayedLines.map((line, index) =>
        index === 1 ? (
          <em key={index}>
            {line}
          </em>
        ) : (
          <p key={index}>{line}</p>
        )
      )}
    </>
  )
}

export default Typewriter