import React from 'react'
import Heading from './Heading'

const Navbar = () => {
  return (
      <div className="flex bg-gray-800 h-14 mb-4 items-center px-4">
				<Heading
					className="text-white font-medium italic p-4 mr-10"
					size="md"
					text="AutoWissen"
				/>
				<div className="flex-grow max-w">
					<form className="flex justify-start">
						<input
							className="w-full max-w-sm p-2 border rounded"
							placeholder="Search..."
						/>
					</form>
				</div>
				<button className="text-white mr-4">Menu</button>
			</div>
  )
}

export default Navbar
