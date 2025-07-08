import React from 'react'
import { Collapsible } from "radix-ui";
import { useState } from 'react';
import { ChevronUpIcon,ChevronDownIcon } from '@radix-ui/react-icons';
import Divider from '@mui/material/Divider';
const InfoSlates = () => {
    const [open,setOpen]=useState(false)
  return (<div className=' w-full left-2 p-5'>
    <div className='m-2'>
        <Divider color="black" />
        <Collapsible.Root className="w-full " open={open} onOpenChange={setOpen}>
			<div className="h-10 flex items-center justify-between">
				<h1 className='font-bold'>Innovation</h1>
				<Collapsible.Trigger asChild>
					<button className="border-2 rounded-2xl ">
						{open?<ChevronUpIcon/>:<ChevronDownIcon/>}
					</button>
				</Collapsible.Trigger>
			</div>
			<Collapsible.Content>
				<div className="mt-5 mb-2">
					<p>Whether it’s workouts or hangouts, our Tree Glider has every phase of your day covered. Inspired by effortless ease, this elevated active style brings flow everywhere you go. The Tree Glider has a carbon footprint of 4.19 kg CO2e. Learn more about carbon footprint labeling and our commitments to reduce our impact.
Best For: Workouts, running errands, and finishing your fave athleisure fit
Breezy Material:  Lightweight, breathable tree fiber in the upper fabric delivers cool, dry comfort
Versatile Design: Wear-with-everything style that meets the moment
Sustainable Materials:
Upper made with a TENCEL™ Lyocell (tree fiber) blend
SuperLight midsole made with sugarcane-based green EVA
Shoelaces made with recycled polyester
Where It’s Made: Vietnam. Learn more about our operations</p>
				</div>
			</Collapsible.Content>
            <Divider color="black"/>
		</Collapsible.Root>
        </div>
  
  </div>
		
	);
}

export default InfoSlates
