import React from 'react';
import { Link } from 'react-router-dom';

function CardItem2(props) {
  return (
    <>
      {/* <div className="cards__item__img">
        <image src='images/destiny.jpg'/>

      </div> */}
      
      {/* <li className='cards__item'> */}
      <div className='cards__item__inner'>

                <br/>
                <div className="text">
                <div className='index-container'>
                    <br/>
                    <p className='step_title'>{props.step}
                    </p>
                    <p className='cards__item__text'>{props.indextext}
                    </p>
                    </div>
                    <img className='arrow-bottom'
                //   alt='Travel Image'
                    src={props.src2}
                />
                </div>
                <img className='gymbuddy_image'
                //   alt='Travel Image'
                src={props.src}
                />
            </div>
          
          {/* <div className='cards__item__info'> */}
          
            
          {/* </div> */}
      {/* </li> */}
    </>
  );
}

export default CardItem2;