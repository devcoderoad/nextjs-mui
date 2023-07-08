import * as React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="secondary.main" gutterBottom>
      {props.children}
    </Typography>
  )
}

export default Title
