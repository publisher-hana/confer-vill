import React from 'react'

const Visual = ({visualText1,visualText2,titleClass}) => {
  return (
   <>
    <section className='visual flexc'>
      <div className='container m0'>
        <strong className={titleClass}>
          {visualText1}
          {visualText2 && (
            <>
              <br />{visualText2}
            </>
            )
          }
        </strong>
      </div>
    </section>
   </>
  )
}

export default Visual