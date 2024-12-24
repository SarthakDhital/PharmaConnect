import React from 'react'

const Footer = () => {
  return (
    <div>
    {/* Footer */}
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; PharmaConnect-{new Date().getFullYear()}. All rights reserved.</p>
        <p>Email: <a href="mailto:support@epharmacy.com" className="underline">support@pharmaconnect.com</a></p>
        <p>Phone: +977-9843929658</p>
      </div>
    </footer></div>
  )
}

export default Footer