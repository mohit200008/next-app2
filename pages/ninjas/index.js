import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';

export const getStaticProps= async()=> {
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await res.json();

    return {
        props:{
            data:data
        }
    }
}


const Ninjas = ({ data }) => {
    return ( 
        <div>
           <h1>All users</h1>
           {data.map(ninja=> (
               <Link href={"/ninjas/"+ninja.id} key={ninja.id}>
                 <a className={styles.single}>
                    <h2>{ninja.name}</h2>
                 </a>
                 
               </Link>
           ))}
        </div>
     );
}
 
export default Ninjas;