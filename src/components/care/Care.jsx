import { useState } from 'react';
import './care.css';
import { Tooltip } from 'react-tooltip';
import upIcon from '../../assets/up.png'
import downIcon from '../../assets/down.png'
import ironIcon from '../../assets/iron.png'
import bleachIcon from '../../assets/do-not-bleach.png'
import dryIcon from '../../assets/do-not-tumble-dry.png'
import washingIcon from '../../assets/washing.png'

const Care = () => {
  const [isCareOpen, setIsCareOpen] = useState(false);
  return (
    <>
      <div className="care-wrapper-title">
        {
          !isCareOpen ?
            <img src={downIcon} alt="chevron down" width={15} height={15} />
            :
            <img src={upIcon} alt="chevron up" width={15} height={15} />
        }
        <h3 className="care-title" onClick={() => setIsCareOpen(!isCareOpen)}>Composition and care</h3>
      </div>
      {
        isCareOpen &&
        <div className="care-container">
          <img src={ironIcon} alt="" width={30} height={30} data-tooltip-id="my-tooltip" data-tooltip-content="Do not iron hot" />
          <img src={washingIcon} alt="" width={30} height={30} data-tooltip-id="my-tooltip" data-tooltip-content="Do not wash hot" />
          <img src={bleachIcon} alt="" width={30} height={30} data-tooltip-id="my-tooltip" data-tooltip-content="Do not bleach" />
          <img src={dryIcon} alt="" width={30} height={30} data-tooltip-id="my-tooltip" data-tooltip-content="Do not tumble dry" />
          <Tooltip place="top" id="my-tooltip" />
        </div>
      }
    </>
  )
}

export default Care
