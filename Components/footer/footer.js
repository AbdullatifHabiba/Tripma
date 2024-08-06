import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import applestore from '@/public/applestore.svg';
import googlestore from '@/public/googlestore.svg';
import tripma from '@/public/tripma.svg';
import foo2 from '@/public/foo2.svg'

const Footer1 = () => {
  return (
    <div className={styles.footerContainer}>
         <div className={styles.footerSection}>
            <Image src={tripma} alt='tripma'/>
         </div>
      <div className={styles.footerSection}>
        <ul>
          <li><Link href="#">About Tripma</Link></li>
          <li><Link href="#">How it works</Link></li>
          <li><Link href="#">Careers</Link></li>
          <li><Link href="#">Press</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Forum</Link></li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Partner with us</h3>
        <ul>
          <li><Link href="#">Partnership programs</Link></li>
          <li><Link href="#">Affiliate program</Link></li>
          <li><Link href="#">Connectivity partners</Link></li>
          <li><Link href="#">Promotions and events</Link></li>
          <li><Link href="#">Integrations</Link></li>
          <li><Link href="#">Community</Link></li>
          <li><Link href="#">Loyalty program</Link></li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Support</h3>
        <ul>
          <li><Link href="#">Help Center</Link></li>
          <li><Link href="#">Contact us</Link></li>
          <li><Link href="#">Privacy policy</Link></li>
          <li><Link href="#">Terms of service</Link></li>
          <li><Link href="#">Trust and safety</Link></li>
          <li><Link href="#">Accessibility</Link></li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Get the app</h3>
        <ul>
          <li><Link href="#">Tripma for Android</Link></li>
          <li><Link href="#">Tripma for iOS</Link></li>
          <li><Link href="#">Mobile site</Link></li>
        </ul>
        <div className={styles.appLinks}>
          <Link href="#"><Image src ={applestore} alt='apple store' /></Link>
          <Link href="#">
          <Image src={googlestore} alt='google'/>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Footer2 = () => {
  return (
    <div className={styles.footerBottom}>
      <Image src={foo2} alt='footer'/>
    </div>
  );
};

export  { Footer1, Footer2 };
