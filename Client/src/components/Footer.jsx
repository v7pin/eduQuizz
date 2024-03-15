import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white text-center p-4">
      <div className="flex justify-center gap-4">
        <a href="https://github.com" className="hover:text-gray-400"><AiFillGithub className="text-2xl"/></a>
        <a href="https://linkedin.com" className="hover:text-gray-400"><AiFillLinkedin className="text-2xl"/></a>
      </div>
      <p className="mt-2">© 2024 EduQuiz. All rights reserved.</p>
    </footer>
  )
}

export default Footer