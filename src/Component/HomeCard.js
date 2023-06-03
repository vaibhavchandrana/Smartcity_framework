import React from 'react'
import block from '../Images/block.png'
import network from '../Images/netwrk.png'
import revise from '../Images/revise.png'
const HomeCard = () => {
  return (
    <div>            
    <section id="two">
    <div className="alpha">
        <div className='two-img'>
            <img src={network} alt="" />
        </div>
        <div>
            <h1>Secure Transaction</h1>
            <p className='text-justify'>
               Details are stored in from of transaction in encrypted format so it is impossible to be read by other than you
            </p>
        </div>
    </div>


    <div className="beta">
        <div className='two-img'>
            <img src={revise} alt="" />
        </div>
        <div>
            <h1>Anytime access.</h1>
            <p className='text-justify'>
            Access Information from Anywhere and Anytime. Just enter your credentials to securely login and unlock a world of endless possibilities
            </p>
        </div>
    </div>


    <div className="gamma">
        <div className='two-img'>
            <img src={block} alt="" />
        </div>
        <div>
            <h1>Vercetile Storage </h1>
            <p className='text-justify'>
                Store any type of Infromation from higher sensitive to low sensitive details. All are stored securely by us.
            </p>
        </div>
    </div>


</section>
</div>
  )
}

export default HomeCard