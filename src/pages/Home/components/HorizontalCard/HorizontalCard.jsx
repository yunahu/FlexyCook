/* eslint-disable react/prop-types */
import CardBootstrap from "react-bootstrap/Card";
import CookingInfo from "src/components/Cards/CookingInfo/CookingInfo";
import Tags from "src/components/Cards/Tags/Tags";

import styles from "./HorizontalCard.module.css";
import { Row, Col, Stack } from "react-bootstrap";

const HorizontalCard = ({
  imgURL,
  width,
  title,
  ingredients,
  tags,
  time,
  size,
  calories
}
) => {
  /**
   * info: object with equip, time, size as keys
   * tags: array of objects, each has color, text as keys
   */
  return (
    <>
      <CardBootstrap className={styles.hori_Card} style={{ width: width }}>
         <Row style={{ height: '100%' }}>
            <Col xs={4} className={styles.imgBlock}>
               <CardBootstrap.Img src={imgURL} className={styles.cardImg} />
            </Col>

            <Col xs={8} className={styles.cardBody}>
               <CardBootstrap.Body>
                  <Stack direction='vertical'>
                     <CardBootstrap.Title>{title}</CardBootstrap.Title>

                     <CardBootstrap.Subtitle>Ingredients</CardBootstrap.Subtitle>
                     <CardBootstrap.Text>{ingredients}</CardBootstrap.Text>

                     <CookingInfo size={size} time={time} calories={calories} />
                     <Tags tags={tags} />
                  </Stack>
               </CardBootstrap.Body>

            </Col>
         </Row>
      </CardBootstrap>
    </>
  );
};

export default HorizontalCard;
