import React from 'react'
import ImageFile from '../Assets/ImageFile.png'
import AddIcon from '../Assets/AddIcon.png'
import ProjectImage1 from '../Assets/ProjectImage1.png'
import ProjectImage2 from '../Assets/ProjectImage2.png'

const Projects = () => {
  return (
    <div>
      <div className="flex-1 flex flex-row w-48 items-center bg-white border-2 border-blue-950 p-4">
        <div>
          <img src={ImageFile} alt='' />
        </div>
          <h1 className="w-full text-center text-blue-950 font-bold">
            New Project
          </h1>
          <div>
          <img src={AddIcon} alt='' />
          </div>
      </div>
      <div className='text-xl border-t border-gray-400 mt-6 font-bold'>
        <p className='pt-3'>Recent</p>
      </div>
      <div className='w-full flex flex-row gap-10 pt-3'>
          <div>
          <img src={ProjectImage1} alt='' />
          <p className='text-center'>Laso Blog</p>
          </div>
          <div>
          <img src={ProjectImage2} alt='' />
          <p className='text-center'>Mountain Blog</p>
          </div>
      </div>
    </div>
  )
}

export default Projects