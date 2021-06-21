import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav>
           <div className="logo">
             <Link href="/"><a style={{ fontWeight:55}}>ML-LIST </a></Link>
              
           </div>
           <Link href="/"><a>Home </a></Link>
           <Link href="/about"><a>About </a></Link>
           <Link href="/ninjas"><a>NinjaListing</a></Link>
        </nav>
     );
}
 
export default Navbar;