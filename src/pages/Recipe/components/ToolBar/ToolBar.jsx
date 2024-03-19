import { Stack, Form, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faCartPlus, faChevronLeft, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import styles from './ToolBar.module.css';


const ToolBar = () => {

   const toolbarToggle = () => {
      const toolbar = document.getElementById('toolbar');
      toolbar.style.display == 'none' ?
      toolbar.style.display = 'flex' :
      toolbar.style.display = 'none';

      // Switching left/right icons & changing colors
      const control = document.getElementById('control');
      var direction = control.style.transform;

      if (direction == 'rotate(0deg)') { /** If the chevron pointing to the right */
         control.style.cssText = 'transform: rotate(180deg); background-color: var(--dark-primary); color: var(--white)';
      } else {
         control.style.cssText = 'transform: rotate(0deg); background-color: var(--light-primary); color: var(--dark-primary)';
      }
   }

   return (
      <Stack className={styles.toolBar} direction='horizontal'>
         
         {/** control button */}
         <Button id={'control'} className={styles.tool} onClick={toolbarToggle}>
            <FontAwesomeIcon icon={faChevronLeft} />
         </Button>

         {/** Tool Items */}
         <Stack className={styles.toolItems} id={'toolbar'} gap={0}>

            <OverlayTrigger
               placement='left'
               delay={{ show: 50, hide: 50 }}
               overlay={
                  <Tooltip>Back To Top</Tooltip>
               }>
                  
                  <Button className={styles.tool} onClick={() => {
                     window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}>
                     <FontAwesomeIcon icon={faAnglesUp} />
                  </Button>

            </OverlayTrigger>

            {/** ------------------------------------------------------------------ */}

            <OverlayTrigger
               placement='left'
               delay={{ show: 50, hide: 50 }}
               overlay={
                  <Tooltip>Convert To Cooking Steps</Tooltip>
               }>

                  <Button className={styles.tool}>
                     <FontAwesomeIcon icon={faFileCirclePlus} />
                  </Button>

            </OverlayTrigger>

            {/** ------------------------------------------------------------------ */}


            <OverlayTrigger
               placement='left'
               delay={{ show: 50, hide: 50 }}
               overlay={
                  <Tooltip>Add To Shopping List</Tooltip>
               }>

                  <Button className={styles.tool}>
                     <FontAwesomeIcon icon={faCartPlus}/>
                  </Button>
            </OverlayTrigger>

            {/** ------------------------------------------------------------------ */}

            <OverlayTrigger
               placement='left'
               delay={{ show: 50, hide: 50 }}
               overlay={
                  <Tooltip>Switch Units</Tooltip>
               }>
               <Stack direction='vertical' className={styles.tool} id={styles.unitSwitch}>
                  <Form.Check type='switch' />
                  <span>Imperial<br></br>Unit</span>
               </Stack>
            </OverlayTrigger>
            
         </Stack>

      </Stack> /** End wrapper */
   );
};


export default ToolBar;