import { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Header = () => {
  const { removeBg } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center justify-between gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 sm:flex-row-reverse'>
      {/* Right Side (Image) - Show First on Small Screens */}
      <div className='w-full max-w-md sm:order-2 lg:order-1'>
        <img src={assets.header_img} alt='Header_img' />
      </div>

      {/* Left Side (Text & Upload Button) - Show Second on Small Screens */}
      <div className='sm:order-1 lg:order-2'>
        <h1 className='text-4xl xl:text-5xl 2xl-text-6xl font-bold text-neutral-700 leading-tight'>
          Remove the <br className='max-md:hidden' /> 
          <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br className='max-md:hidden' /> 
          images for free.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. <br className='max-md:hidden' /> 
          Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div>
          <input onChange={e => removeBg(e.target.files[0])} type='file' accept='image/*' id='upload1' hidden />
          <label htmlFor='upload1' className='inline-flex gap-3 px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-600'>
            <img width={20} src={assets.upload_btn_icon} alt='Upload img' />
            <p className='text-white text-sm'> Upload Your Images</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
