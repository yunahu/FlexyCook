/* eslint-disable react/prop-types */
import Stack from "react-bootstrap/Stack";

import styles from "./CookingInfo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";

const CookingInfo = ({ size, time, calories }) => {
  /*
      info {
         calories: 'Oven',
         time: 40,
         size: 2
      }
   */
  return (

   <Stack direction="horizontal" gap={3} className={styles.wrapper}>
      <div className={"p-2"}><FontAwesomeIcon icon={faKitchenSet} />&ensp;{calories} kcal</div>
      <div className={"vr"} />
      <div className={"p-2"}><FontAwesomeIcon icon={faClockRotateLeft} />&ensp;{time} minutes</div>
      <div className={"vr"} />
      <div className={"p-2 me-auto"}><FontAwesomeIcon icon={faUtensils} />&ensp;{size} {size > 1 ? "servings" : "serving"}</div>
   </Stack>

  );
};

export default CookingInfo;
