import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import codeTheme from 'prism-react-renderer/themes/nightOwl'
import { pre, lineNumber } from './bulmaElements.module.scss'

export const isSize1 = props => (
  <h1 className="is-size-1-tablet is-size-2-mobile has-text-primary" {...props}>
    {props.children}
  </h1>
)

export const isSize2 = props => (
  <h2 className="is-size-2-tablet is-size-3-mobile has-text-primary" {...props}>
    {props.children}
  </h2>
)

export const isSize3 = props => (
  <h3 className="is-size-3-tablet is-size-4-mobile has-text-primary" {...props}>
    {props.children}
  </h3>
)

export const isSize4 = props => (
  <h4 className="is-size-4-tablet is-size-5-mobile has-text-primary" {...props}>
    {props.children}
  </h4>
)

export const isSize5 = props => (
  <h5 className="is-size-5-tablet is-size-6-mobile has-text-primary" {...props}>
    {props.children}
  </h5>
)

export const isSize6 = props => (
  <h6 className="is-size-6-tablet is-size-7-mobile has-text-grey-light" {...props}>
    {props.children}
  </h6>
)

export const table = props => (
  <div className="table-container">
    <table className="table is-bordered is-striped is-hoverable is-fullwidth" {...props}>
      {props.children}
    </table>
  </div>
)

export const paragraph = props => (
  <div className="content">
    <p {...props}>{props.children}</p>
  </div>
)

export const ul = props => (
  <div className="content">
    <ul {...props}>{props.children}</ul>
  </div>
)

export const blockquote = props => (
  <div className="content">
    <blockquote {...props}>{props.children}</blockquote>
  </div>
)

export const ol = props => (
  <div className="content">
    <ol {...props}>{props.children}</ol>
  </div>
)

export const a = props => (
  <a target="_blank" rel="noreferrer" {...props}>
    {props.children}
  </a>
)

// inspiration from https://prince.dev/prism-react-renderer
export const CodeBlock = props => {
  // Pull the className from <pre>
  const language = props.className.replace(/language-/, '') || "";
  // remove the trailing '/n' adding a empty line number at the end
  const code = props.children.slice(0, props.children.lastIndexOf('\n'));


  return (
    <Highlight {...defaultProps}
      code={code}
      language={language}
      theme={codeTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${pre}`} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            return (
              <div key={index} {...lineProps}>
                <span className={lineNumber}>{index + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          }
          )}
        </pre>
      )}
    </Highlight>
  )
}
