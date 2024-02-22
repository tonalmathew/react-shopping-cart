/* eslint-disable react/prop-types */
import { createPortal } from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = ({onClose}) => {
  return <div onClick={onClose} className={classes.backdrop} />
}
const Overlay = ({children}) => {
  return(
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

const portal = document.getElementById('overlays')

export default function Modal({children, onClose}) {
  return(
    <>
    {createPortal(<Backdrop onClose={onClose} />, portal)}
    {createPortal(<Overlay>{children}</Overlay>, portal)}
    </>
  )
}