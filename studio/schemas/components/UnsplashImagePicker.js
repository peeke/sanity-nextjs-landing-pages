import React, { Component } from 'react'
import { toJson } from 'unsplash-js'
import { debounce } from 'lodash'
import { withDocument } from 'part:@sanity/form-builder'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import unsplash from '../../unsplash'

import styles from './UnsplashImagePicker.css'

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(String(value)))
}

class UnsplashImagePicker extends Component {
  state = {
    query: '',
    images: []
  }

  render() {
    const { type, value } = this.props

    return (
      <div>
        <img className={styles.image} src={value} />

        <FormField label={type.title} description={type.description}>
          <input
            className={styles.input}
            type="text"
            value={this.state.query}
            onChange={this.handleQueryChange}
            ref={element => (this._inputElement = element)}
          />
        </FormField>

        {Boolean(this.state.images.length) && (
          <div className={styles.results}>
            {this.state.images.map((image, i) => (
              <button key={i} onClick={e => this.selectImage(image, e)}>
                <img className={styles.image} src={image.thumb} />
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  focus() {
    this._inputElement.focus()
  }

  selectImage = (image, e) => {
    e.preventDefault()
    this.setState({ images: [] })
    this.props.onChange(createPatchFrom(image.regular))
  }

  handleQueryChange = e => {
    this.setState({ query: e.target.value })
    this.search(e.target.value)
  }

  search = debounce(query => {
    unsplash.search
      .photos(query, 1, 3, null, 'landscape')
      .then(toJson)
      .then(json => {
        this.setState({
          images: json.results ? json.results.map(result => result.urls) : []
        })
      })
  }, 300)
}

export default withDocument(UnsplashImagePicker)
