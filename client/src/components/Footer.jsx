
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      <img width={150} src={assets.logo} alt='Logo' />
      <p className='flex-1 pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright @muskanmalviyaa | All right reserved.
      </p>

      <div className='flex gap-2 '>
        <img className='hover:scale-115 transition-all duration-600' src={assets.facebook_icon} alt='Facebook' width={40} />
        <img className='hover:scale-115 transition-all duration-600' src={assets.twitter_icon} alt='Twitter' width={40} />
        <img className='hover:scale-115 transition-all duration-600'  src={assets.google_plus_icon} alt='Google' width={40} />
      </div>
    </div>
  )
}

export default Footer
