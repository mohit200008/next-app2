import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
           <div className="logo">
            
             <Image src="/logo.png" width={140} height={98} borderradius={20} alt="logo" />
              
           </div>
           <Link href="/"><a>Home </a></Link>
           <Link href="/about"><a>About </a></Link>
           <Link href="/ninjas"><a>NinjaListing</a></Link>
        </nav>
     );
}
 
export default Navbar;