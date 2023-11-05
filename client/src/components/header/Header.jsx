import '../header/header.css'
import headerimg from '../images/CoffeCake.JPG'

export default function Header() {
  return (
    <div className='header'>

        <div className='headerTitles'>
            <span className='headerTitleSm' > React & Node </span>
            <span className='headerTitleLg' > Blog </span>  
        </div>

        <img className='headerImg' src={headerimg} alt='header image' />

    </div>

  )
}
