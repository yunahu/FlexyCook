import styles from './Home.module.css';
import Large_Square_Card from './components/LargeSquareCard/LargeSquareCard';
import CarouselBanner from './components/CarouselBanner/CarouselBanner';
import HorizontalCard from './components/HorizontalCard/HorizontalCard';
import { Row, Col, Stack } from 'react-bootstrap';
import Divider from 'src/components/Divider/Divider';


const dummyData = () => {
   return { /** A dummy object with present data */
      // width: '30rem',
      // height: '40vh',  /** must be px/rem value */
      imgURL: 'src/assets/images/sample-pic-horizontal.jpg',
      // imgURL: 'src/assets/images/sample_pic.jpg',
      title: 'Some Random Recipe',
      description: 'This is recipe description blablabla ... ',
      info: {
         equip:'Oven',
         time:'40 minutes',
         size:'2 servings'
      },
      tags: [
               {text:'Tag 1', color:'danger'},
               {text: 'Tag 2', color:'success'},
               {text: 'Tag 3', color:'warning'}
            ]
   };
};


const Home = () => {
   const recipeInfo = dummyData();

	return (
		<div className={styles.container}>

         <Row className={styles.recommendation_lg}>
            <Col lg={6}> {/** Large square recommendation card */}
               <Large_Square_Card className={styles.lg_sq_card}
                  width={'100%'}
                  // height={recipeInfo.height}
                  imgURL={recipeInfo.imgURL}
                  title={recipeInfo.title}
                  description={recipeInfo.description}
                  info={recipeInfo.info}
                  tags={recipeInfo.tags}
               />
            </Col>

            <Col lg={6}> {/** Small horizontal recommendation cards x3 */}
               <Stack direction='vertical' gap={3} className={styles.sm_3_cards}>
                  <HorizontalCard className={styles.lg_hori_card}
                     width={'100%'}
                     height={'100%'}
                     imgURL={recipeInfo.imgURL}
                     title={recipeInfo.title}
                     description={recipeInfo.description}
                     info={recipeInfo.info}
                     tags={recipeInfo.tags}
                  />
                  <HorizontalCard className={styles.lg_hori_card}
                     width={'100%'}
                     height={'100%'}
                     imgURL={recipeInfo.imgURL}
                     title={recipeInfo.title}
                     description={recipeInfo.description}
                     info={recipeInfo.info}
                     tags={recipeInfo.tags}
                  />
                  <HorizontalCard className={styles.lg_hori_card}
                     width={'100%'}
                     height={'100%'}
                     imgURL={recipeInfo.imgURL}
                     title={recipeInfo.title}
                     description={recipeInfo.description}
                     info={recipeInfo.info}
                     tags={recipeInfo.tags}
                  />
               </Stack>
            </Col>
         </Row>

         <Row className={styles.recommendation_md}>
            <Col xs={12}>
               <CarouselBanner
                  item1={recipeInfo}
                  item2={recipeInfo}
                  item3={recipeInfo}
               />
            </Col>
         </Row>

         {/** set label={''} for a not-labeled divider */}
         <Divider width={'100%'} label={'Scroll Down'} labelWidth={'10vw'}/>
         

         <Stack gap={3}> {/** horizontal recommendation cards */}
            <HorizontalCard className={styles.lg_hori_card}
                  width={'100%'}
                  height={'30vh'}
                  imgURL={recipeInfo.imgURL}
                  title={recipeInfo.title}
                  description={recipeInfo.description}
                  info={recipeInfo.info}
                  tags={recipeInfo.tags}
            />
            <HorizontalCard className={styles.lg_hori_card}
                  width={'100%'}
                  height={'30vh'}
                  imgURL={recipeInfo.imgURL}
                  title={recipeInfo.title}
                  description={recipeInfo.description}
                  info={recipeInfo.info}
                  tags={recipeInfo.tags}
            />
            <HorizontalCard className={styles.lg_hori_card}
                  width={'100%'}
                  height={'30vh'}
                  imgURL={recipeInfo.imgURL}
                  title={recipeInfo.title}
                  description={recipeInfo.description}
                  info={recipeInfo.info}
                  tags={recipeInfo.tags}
            />

         </Stack>
         


		</div>
	);
};

export default Home;
