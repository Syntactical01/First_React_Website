import React from 'react';


/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
/**
 * Component is described here.
 *
 * @example ./extra.examples.md
 */
function HomepageImage() {
  const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
  return (
    <img src={url} style={{width: 650}} alt='Image of Golden Gate Bridge' />
  );
}

export default HomepageImage;