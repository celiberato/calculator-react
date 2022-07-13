import Image from "../../assets/images/banner.jpg";
import styles from "./styles.css"

function BannerImage() {
  return (
    <div className={styles.wrapper}>
      <div style={{width: '60%', height: '10px', backgroundColor: 'black', margin: '0 auto'}}></div>
      <img src={Image} alt="Banner" width='60%'></img>
    </div>
  );
}

export default BannerImage;
