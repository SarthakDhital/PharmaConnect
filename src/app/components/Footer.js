import React from 'react'

const Footer = () => {
  return (
    <div>
    {/* Footer */}
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; PharmaConnect-{new Date().getFullYear()}. All rights reserved.</p>
          <p >📍 Koteshwor, Kathmandu, Nepal. </p>
          <p> 📞 +977-9843929658 | ✉️ support@pharmaconnect.com</p>
      </div>
    </footer></div>
  )
}

export default Footer