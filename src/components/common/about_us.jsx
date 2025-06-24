import React from 'react'

const AboutUs = () => {
  console.log("About Us");
  return (
    <div className='container ' style={{ marginTop: '120px', paddingBottom: '100px' }}>
      <img
        src="https://cdn-media.powerlook.in/wysiwyg/Screenshot_2024-08-30_at_12.18.39_PM_2_.png"
        alt="Shirt Banner"
        className="img-fluid w-100 mb-4"
        style={{ objectFit: 'cover', maxHeight: '500px' }}
      />
      {/* <h1>About Us</h1> */}
      <p style={{ fontSize: '16px', fontWeight: '600', color: '#555454' }}>It’s great to see you’ve made the effort to know more about us<br /><br /> 

        Powerlook was founded in the bustling streets of Mumbai in 2017 by two brothers, Amar Pawar and Raghav Pawar. It all started with a bold vision to make the Trendiest fashion pieces accessible and affordable for every Indian Man out there. What started as a single store has quickly evolved into one of the fastest homegrown names with 8 stores across India and a vast online community of fashion forwards.<br /><br />

        We understand that looking good should never come at the expense of comfort or affordability. That’s why each piece in our fast fashion collection is crafted uniquely and intelligently, offering both quality and cost savings—and that’s what sets us apart.<br /><br />
        Since 2019, we’ve taken our presence online, launching a dynamic digital platform where we continuously update our collections with the latest styles every month to keep our community buzzing with excitement.<br /><br />

        Our designs draw inspiration from the pulse of the streets, blending India’s vibrant style with a cool Western twist. Every thread we use is a testament to our commitment to quality, comfort, and staying ahead of the fashion curve.<br /><br />

        But we’re not just about clothes — we’re about creating a community. A community of Indian men who aren’t afraid to stand out and make a statement.<br /><br />

        In 2024, we launched 9 stores & 1 launching soon, bringing our total to 12 + offline stores across India—and we’re just getting started. With plans to expand to 50 more stores, we’re set to bring Powerlook to every corner of the country.</p>
    </div>
  )
}

export default AboutUs