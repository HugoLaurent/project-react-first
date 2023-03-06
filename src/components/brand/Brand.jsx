import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './import'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={ google } alt="logo of google" />
      </div>
      <div>
        <img src={ slack } alt="logo of slack" />
      </div>
      <div>
        <img src={ atlassian } alt="logo of atlassian" />
      </div>
      <div>
        <img src={ dropbox } alt="logo of dropbox" />
      </div>
      <div>
        <img src={ shopify } alt="logo of shopify" />
      </div>
    </div>
  )
}

export default Brand
