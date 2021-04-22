import React from "react"

export const isSize1 = props => <h1 className="is-size-1" {...props} />
export const isSize2 = props => <h2 className="is-size-2" {...props} />
export const isSize3 = props => <h3 className="is-size-3" {...props} />
export const isSize4 = props => <h4 className="is-size-4" {...props} />
export const isSize5 = props => <h5 className="is-size-5" {...props} />
export const isSize6 = props => <h6 className="is-size-6" {...props} />
export const isSize7 = props => <h7 className="is-size-7" {...props} />
export const table = props => <table className="table" {...props} />
export const paragraph = props => (
  <div className="content">
    <p {...props} />
  </div>
)
export const ul = props => (
  <div className="content">
    <ul {...props} />
  </div>
)
export const blockquote = props => (
  <div className="content">
    <blockquote {...props} />
  </div>
)
