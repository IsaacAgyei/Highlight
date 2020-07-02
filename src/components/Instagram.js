import React from 'react'
import InstagramEmbed from 'react-instagram-embed';


function InstagramPost() {
  return (
    <div>
      <InstagramEmbed
          url='https://www.instagram.com/p/CA8s7sYj-_O/'
          maxWidth={400}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
    </div>
    
  )
}

export default InstagramPost