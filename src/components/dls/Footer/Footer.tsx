import BottomSection from './BottomSection';
import styles from './Footer.module.scss';
// import Links from './Links';

const Footer = () => {
  return (
    <footer>
      <div className={styles.flowItem}>
        <div className={styles.container}>
        </div>
        <BottomSection />
      </div>
      <div className={styles.emptySpacePlaceholder} />
    </footer>
  );
};

export default Footer;
