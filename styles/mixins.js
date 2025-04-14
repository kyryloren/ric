export function pxCutOff(px) {
  return `${(px / 1280) * 100}vw`
}

export function splitText(text) {
  return (
    <>
      {text?.split('\n').map((line, lineIndex) => (
        <span key={lineIndex} className="line-wrapper">
          {line?.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="overflow">
              <span className="anim-word">{word}&nbsp;</span>
            </span>
          ))}
        </span>
      ))}
    </>
  )
}
