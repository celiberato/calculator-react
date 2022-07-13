import Image from "../../assets/images/banner.jpg";
import styles from "./styles.css"

function BannerImage() {
  return (
    <div className={styles.wrapper}>
      <img src={Image} alt="Banner" width='80%'></img>
    </div>
  );
}

export default BannerImage;
