import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import Title from "../../../../title/title"

export default function StoryPoints(props) {
  return (
    <Title
      title="Story Points"
      titleSize={4}
      titleColor="white"
      subtitle={
        <div className="columns is-multiline">
          {!props.story ? null : (
            props.story.map((storypoint, index) => (
              <div 
                key={`${index}-${Math.random().toString(36).substr(2, 10)}`} 
                className="column is-narrow"
                style={{"width":"fit-content"}}
              >
                <p className="has-text-primary">
                  <FontAwesomeIcon 
                    icon={faBook} 
                    style={{height: "0.7rem", verticalAlign: "inherit"}}
                  /> <strong>{`#${storypoint.getIndex() + 1}`}</strong>
                </p>
                <p><strong>Caption:</strong> <i>{storypoint.getCaption()}</i></p>
              </div>
            ))
          )}
        </div>
      }
      subtitleSize={6}
      subtitleColor="grey-lighter"
    />
  )
}
