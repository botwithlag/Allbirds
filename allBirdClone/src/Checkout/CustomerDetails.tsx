import * as Form from '@radix-ui/react-form';
import FormControls from '@mui/material/FormControl';
import { Text } from '@radix-ui/themes';
import {Button}from "@radix-ui/themes"
const CustomerDetails:React.FC=()=>{
return(
    <><div className='ml-5 p-4 '>
    <Form.Root>
        <Form.Field name="email">
           <div className='mb-4'>
            <h1 className='text-[15px] font-bold'>Contact</h1>
            <Form.Control asChild>
          <input  type="email" required className="p-4 w-full h-[25px] mt-2 border border-gray-300 text-[10px] " placeholder='email' />
        </Form.Control>
           </div>
        </Form.Field>
        <div className="mb-3">
            <h1 className='text-[15px] font-bold'>Delivery</h1>
            <Form.Field name="Region">
                <Form.Control asChild>
                    <input type="text" required className='w-full h-[25px]  p-4 mt-3 border border-gray-300 text-[10px]' 
                    placeholder="Country"/>
                </Form.Control>

            </Form.Field>
            <div className='flex gap-10 '>
                 <Form.Field name="FirstName">
                <Form.Control asChild>
                    <input type="text" required className='p-4 w-full h-[25px] mt-3 border border-gray-300  text-[10px]' 
                    placeholder="FirstName"/>
                </Form.Control>

            </Form.Field>
            <Form.Field name="lastName">
                <Form.Control asChild>
                    <input type="text" required className='p-4  w-full h-[25px] mt-3 border border-gray-300  text-[10px]' 
                    placeholder="LastName"/>
                </Form.Control>

            </Form.Field>
            </div>
            <Form.Field name="Company">
                <Form.Control asChild>
                    <input type="text" required className='p-4  w-full h-[25px] mt-3 border border-gray-300  text-[10px]' 
                    placeholder="Company"/>
                </Form.Control>

            </Form.Field>
             <Form.Field name="Address">
                <Form.Control asChild>
                    <input type="text" required className='p-4  w-full h-[25px] mt-3 border border-gray-300 text-[10px]' 
                    placeholder="Address"/>
                </Form.Control>

            </Form.Field>
            <Form.Field name="Apartement">
                <Form.Control asChild>
                    <input type="text" required className='p-4  w-full h-[25px] mt-3 border border-gray-300  text-[10px]' 
                    placeholder="Apartement"/>
                </Form.Control>

            </Form.Field>
            <div className='flex flex-1/3 gap-2'>
                 <Form.Field name="City">
                <Form.Control asChild>
                    <input type="text" required className='p-4  w-full h-[25px] mt-3 border border-gray-300  text-[10px]' 
                    placeholder="City"/>
                </Form.Control>

            </Form.Field>
             <Form.Field name="State">
                <Form.Control asChild>
                    <input type="text" required className='p-4  w-full h-[25px] mt-3 border border-gray-300  text-[10px]' 
                    placeholder="State"/>
                </Form.Control>

            </Form.Field>
             <Form.Field name="ZipCode">
                <Form.Control asChild>
                    <input type="text" required className='p-4 text-[10px]  w-full h-[25px] mt-3 border border-gray-300 ' 
                    placeholder="ZIP Code"/>
                </Form.Control>

            </Form.Field>
              
            </div>
            
    


        </div>
       
    </Form.Root>
    </div>

    </>
)
}

export default CustomerDetails