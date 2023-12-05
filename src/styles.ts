import { CSSProperties } from '@mui/material/styles/createMixins'

const styledBox: CSSProperties = {
  height: '100%',
  position: 'relative',
  padding: '2rem 0rem',
  zIndex: '0',
  overflow: 'hidden',
  '::before, ::after': {
    content: '" "',
    backgroundColor: 'secondary.light',
    position: 'absolute',
    zIndex: '-1',
    borderRadius: '20px',
    bottom: 0,
    transform: 'rotate(-45deg)',
  },
  '::before': {
    top: '-30rem',
    right: '-10rem',
    width: '1152px',
    height: '980px',
  },
  '::after': {
    left: '-10rem',
    width: '1024px',
    height: '780px',
  },
}

const styledPaper: CSSProperties = {
  padding: '.75rem 1.5rem',
  position: 'relative',
  zIndex: 0,
  overflow: 'hidden',
  '&:before': {
    content: '" "',
    position: 'absolute',
    top: '0rem',
    right: '0rem',
    width: '25px',
    height: '25px',
    backgroundColor: '#ffffff',
    border: '2px solid #cdcdcd',
    opacity: 0.25,
    transform: 'rotate(-40deg) translate(2px,2px)',
    borderRadius: '50%',
    zIndex: -1,
  },
  '&:after': {
    content: '" "',
    position: 'absolute',
    bottom: '-1.95rem',
    right: '-1.95rem',
    width: '80px',
    height: '80px',
    transform: 'rotate(-40deg) scale(1)',
    borderRadius: '50%',
    opacity: '0.5',
    backgroundImage: 'var(--img-paper-dot)',
    backgroundPosition: 'top center',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'scroll',
    zIndex: -1,
  },
}

const styledCard: CSSProperties = {
  boxShadow: '1',
  borderRadius: '10px',
  minHeight: 240,
  backgroundColor: 'white',
  ':hover': { boxShadow: '3' },
  ...styledPaper,
}

export { styledPaper, styledCard, styledBox }
