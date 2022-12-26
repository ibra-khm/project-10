import React from 'react'

function CategoryCard(props) {
  return (
    <>
			<label
				className={`text-darkRed bg-white flex flex-col max-w-xs mx-auto overflow-hidden rounded-3xl shadow-xl border-2 border-gray-200 cursor-pointer 
				peer-checked:shadow-darkRed/70 
				hover:text-lemonSh peer-checked:text-darkYellow hover:bg-gray-50 peer-checked:shadow-4xl ${props.style}`}
				htmlFor={props.for}
			>
				<img src={props.img} alt="" />
				<div className="px-4 py-4">
					<h2 className={`text-2xl ${props.textstyle}`}>{props.name}</h2>
				</div>
			</label>
		</>
  )
}

CategoryCard.defaultProps = {
	style: "",
	for: "",
	textstyle: "",
};

export default CategoryCard