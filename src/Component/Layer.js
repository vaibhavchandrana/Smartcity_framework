import React from 'react'

const Layer = () => {
  return (
    <div className='ml-8 mr-7 md:ml-32 md:mr-32 text-justify'>
        <center><h1 className='text-3xl font-bold mb-10'>How we secure your information</h1></center>
        
         <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
        <li className="mb-10 ml-6">            
          <span className="absolute flex items-center justify-center w-12 h-12 bg-green-200 rounded-full -left-6 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          </span>
          <h3 className="font-medium text-xl leading-tight ml-5">Layer 1</h3>
          <p className="text-lg ml-5">This crucial layer plays a vital role in ensuring secure authentication and authorization mechanisms between the client application and the server infrastructure. It establishes a robust and reliable framework for validating user credentials, safeguarding sensitive data, and enabling seamless user authentication experiences. By implementing strong encryption algorithms, secure communication protocols, and stringent access controls, this layer strengthens the overall security posture of the system and mitigates potential vulnerabilities</p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full -left-6 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </span>
          <h3 className="font-medium text-xl leading-tight ml-5">Layer 2</h3>
          <p className="text-lg ml-5">This layer is responsible for establishing a secure and encrypted connection with our highly reliable and resilient cloud database infrastructure. It ensures the confidentiality, integrity, and availability of data, safeguarding against unauthorized access, data breaches, and potential threats</p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full -left-6 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
          </span>
          <h3 className="font-medium text-xl leading-tight ml-5">Layer 3</h3>
          <p className="text-lg ml-5">This layer is primarily responsible for ensuring and upholding data integrity through the utilization of robust cryptographic algorithms, thereby safeguarding the authenticity, confidentiality, and accuracy of the information exchanged within the system</p>
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full -left-6 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          </span>
          <h3 className="font-medium text-xl leading-tight ml-5">Layer 4</h3>
          <p className="text-lg ml-5">This layer is responsible for secure key management by the key distribution server. It ensures the proper generation, storage, retrieval, and revocation of cryptographic keys. The key distribution server employs robust algorithms and protocols to securely transmit keys to authorized entities. It safeguards against unauthorized access, tampering, or leakage of sensitive key material. Additionally, this layer facilitates key updates, synchronization, and expiration, ensuring the integrity and confidentiality of encrypted data.</p>
        </li>
      </ol>

    </div>
  )
}

export default Layer