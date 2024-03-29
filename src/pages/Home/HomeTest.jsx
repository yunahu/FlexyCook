import styles from "./Home.module.css";
import Large_Square_Card from "./components/LargeSquareCard/LargeSquareCard";
import CarouselBanner from "./components/CarouselBanner/CarouselBanner";
import HorizontalCard from "./components/HorizontalCard/HorizontalCard";
import { Row, Col, Stack } from "react-bootstrap";
import Divider from "src/components/Divider/Divider";
import axios from "axios";
import { useEffect, useState } from "react";
import { capitalize } from "src/utils/common";
import { findStrongestTaste } from "src/utils/spoonacularFunctions";

const createTags = (recipe) => {
  const tags = [
    {
      text:
        recipe[0].cuisines.length > 0
          ? capitalize(recipe[0].cuisines[0])
          : null,
      type: "success",
    },
    {
      text: recipe[0].diets.length > 0 ? capitalize(recipe[0].diets[0]) : null,
      type: "warning",
    },
    {
      text:
        recipe[0].dishTypes.length > 0
          ? capitalize(recipe[0].dishTypes[0])
          : null,
      type: "dark",
    },
    {
      text: recipe[0].veryPopular ? "Popular" : null,
      type: "info",
    },
    {
      text: recipe[0].cheap ? "Cheap" : null,
      type: "info",
    },
    {
      text: recipe[0].veryHealthy ? "Healthy" : null,
      type: "info",
    },
    {
      text: findStrongestTaste(recipe[1]),
      type: "light",
    },
  ];
  return tags;
};

const HomeTest = () => {
  const [fetchLoading, setFetchLoading] = useState(true);
  const [recipeDetails, setRecipeDetails] = useState([]);
  // const [three_props, setThreeProps] = useState({});

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        axios
          .get("http://localhost:3000/spoonacular/randomRecipe", {
            params: { number: 7 },
          })
          .then(async (res) => {
            console.log(res.data.recipes);
            const recipeId = res.data.recipes.map((recipe) => recipe.id);
            console.log(recipeId);

            const recipeDetail = await Promise.all(
              recipeId.map((id) =>
                Promise.all([
                  axios
                    .get("http://localhost:3000/spoonacular/getRecipe", {
                      params: { id, includeNutrition: true },
                    })
                    .then((res) => res.data),
                  axios
                    .get("http://localhost:3000/spoonacular/getRecipeTaste", {
                      params: { id, normalize: true },
                    })
                    .then((res) => res.data),
                ])
              )
            );
            setRecipeDetails(recipeDetail);
            console.log(recipeDetail);

            const three_prop = [
              {
                imgURL: recipeDetail[0][0].image,
                title: recipeDetail[0][0].title,
                calories: Math.floor(
                  recipeDetail[0][0].nutrition.nutrients[0].amount
                ),
                time: recipeDetail[0][0].readyInMinutes,
                size: recipeDetail[0][0].servings,
                tags: createTags(recipeDetail[0]),
              },
              {
                imgURL: recipeDetail[1][0].image,
                title: recipeDetail[1][0].title,
                calories: Math.floor(
                  recipeDetail[1][0].nutrition.nutrients[0].amount
                ),
                time: recipeDetail[1][0].readyInMinutes,
                size: recipeDetail[1][0].servings,
                tags: createTags(recipeDetail[1]),
              },
              {
                imgURL: recipeDetail[2][0].image,
                title: recipeDetail[2][0].title,
                calories: Math.floor(
                  recipeDetail[2][0].nutrition.nutrients[0].amount
                ),
                time: recipeDetail[2][0].readyInMinutes,
                size: recipeDetail[2][0].servings,
                tags: createTags(recipeDetail[2]),
              },
            ];

            // setThreeProps(three_prop);
            console.log(three_prop);
            setFetchLoading(false);
            setThreeProps(three_prop);
          });
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setFetchLoading(true);
      }
    };

    fetchRecipes();
  }, []);

  const [three_props, setThreeProps] = useState({});

  if (fetchLoading) {
    return <div>Loading recipes...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <Row className={styles.recommendation_xl}>
          <Col lg={6} style={{ paddingLeft: 0 }}>
            {/** Large square recommendation card */}
            <Large_Square_Card
              className={styles.lg_sq_card}
              width={"100%"}
              // height={recipeInfo.height}
              imgURL={recipeDetails[0][0].image}
              title={recipeDetails[0][0].title}
              description={recipeDetails[0][0].extendedIngredients
                .map((ingredient) => ingredient.name)
                .join(", ")}
              time={recipeDetails[0][0].readyInMinutes}
              size={recipeDetails[0][0].servings}
              calories={Math.floor(
                recipeDetails[0][0].nutrition.nutrients[0].amount
              )}
              tags={createTags(recipeDetails[0])}
            />
          </Col>

          <Col lg={6} style={{ paddingRight: 0 }}>
            {" "}
            {/* Small horizontal recommendation cards x3 */}
            <Stack direction="vertical" gap={3} className={styles.sm_3_cards}>
              <HorizontalCard
                className={styles.lg_hori_card}
                width={"100%"}
                height={"100%"}
                imgURL={recipeDetails[1][0].image}
                title={recipeDetails[1][0].title}
                description={recipeDetails[1][0].extendedIngredients
                  .map((ingredient) => ingredient.name)
                  .join(", ")}
                time={recipeDetails[1][0].readyInMinutes}
                size={recipeDetails[1][0].servings}
                calories={Math.floor(
                  recipeDetails[1][0].nutrition.nutrients[0].amount
                )}
                tags={createTags(recipeDetails[1])}
              />
              <HorizontalCard
                className={styles.lg_hori_card}
                width={"100%"}
                height={"100%"}
                imgURL={recipeDetails[2][0].image}
                title={recipeDetails[2][0].title}
                description={recipeDetails[2][0].extendedIngredients
                  .map((ingredient) => ingredient.name)
                  .join(", ")}
                time={recipeDetails[2][0].readyInMinutes}
                size={recipeDetails[2][0].servings}
                calories={Math.floor(
                  recipeDetails[2][0].nutrition.nutrients[0].amount
                )}
                tags={createTags(recipeDetails[2])}
              />
              <HorizontalCard
                className={styles.lg_hori_card}
                width={"100%"}
                height={"100%"}
                imgURL={recipeDetails[3][0].image}
                title={recipeDetails[3][0].title}
                description={recipeDetails[3][0].extendedIngredients
                  .map((ingredient) => ingredient.name)
                  .join(", ")}
                time={recipeDetails[3][0].readyInMinutes}
                size={recipeDetails[3][0].servings}
                calories={Math.floor(
                  recipeDetails[3][0].nutrition.nutrients[0].amount
                )}
                tags={createTags(recipeDetails[3])}
              />
            </Stack>
          </Col>
        </Row>

        <Row className={styles.recommendation_lg}>
          <Col xs={12}>
            <CarouselBanner
              prop1={three_props[0]}
              prop2={three_props[1]}
              prop3={three_props[2]}
            />
          </Col>
        </Row>

        {/** set label={''} for a not-labeled divider */}
        <Row>
          <Divider width={"100%"} label={"Scroll Down"} labelWidth={"10vw"} />
        </Row>

        <Stack gap={3}>
          {/** horizontal recommendation cards */}
          <HorizontalCard
            className={styles.lg_hori_card}
            width={"100%"}
            height={"30vh"}
            imgURL={recipeDetails[4][0].image}
            title={recipeDetails[4][0].title}
            description={recipeDetails[4][0].extendedIngredients
              .map((ingredient) => ingredient.name)
              .join(", ")}
            time={recipeDetails[4][0].readyInMinutes}
            size={recipeDetails[4][0].servings}
            calories={Math.floor(
              recipeDetails[4][0].nutrition.nutrients[0].amount
            )}
            tags={createTags(recipeDetails[4])}
          />
          <HorizontalCard
            className={styles.lg_hori_card}
            width={"100%"}
            height={"30vh"}
            imgURL={recipeDetails[5][0].image}
            title={recipeDetails[5][0].title}
            description={recipeDetails[5][0].extendedIngredients
              .map((ingredient) => ingredient.name)
              .join(", ")}
            time={recipeDetails[5][0].readyInMinutes}
            size={recipeDetails[5][0].servings}
            calories={Math.floor(
              recipeDetails[5][0].nutrition.nutrients[0].amount
            )}
            tags={createTags(recipeDetails[5])}
          />
          <HorizontalCard
            className={styles.lg_hori_card}
            width={"100%"}
            height={"30vh"}
            imgURL={recipeDetails[6][0].image}
            title={recipeDetails[6][0].title}
            description={recipeDetails[6][0].extendedIngredients
              .map((ingredient) => ingredient.name)
              .join(", ")}
            time={recipeDetails[6][0].readyInMinutes}
            size={recipeDetails[6][0].servings}
            calories={Math.floor(
              recipeDetails[6][0].nutrition.nutrients[0].amount
            )}
            tags={createTags(recipeDetails[6])}
          />
        </Stack>
      </div>
    </>
  );
};

export default HomeTest;
