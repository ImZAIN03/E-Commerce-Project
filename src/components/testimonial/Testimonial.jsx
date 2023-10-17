import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 bg-gray-100 body-font mb-10 rounded-xl w-5/6 mx-auto">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-blue-500'>Customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/3242/3242257.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">As a small business owner, this e-commerce web app has transformed the way I sell my products. Setting up my store was a breeze, thanks to the user-friendly interface and customizable templates. </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Customer</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Business Owner</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2922/2922561.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">I've tried several e-commerce platforms, but this web app stands out from the rest. The customer service is exceptional; they're responsive, helpful, and genuinely care about customer satisfaction. </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Customer</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Buyer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2903/2903395.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed"> I absolutely love this e-commerce web app! The interface is user-friendly, making my shopping experience smooth and enjoyable. The variety of products is impressive.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Customer</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Seller</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial