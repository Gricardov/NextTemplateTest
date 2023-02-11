import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import defaultUserData from "@constants/data";

export default function Home({ userData, repositories }) {
  return (
    <ContainerBlock
      title={userData.githubUsername}
      description={userData.designation}
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getStaticProps = async (context) => {
  let token = process.env.GITHUB_AUTH_TOKEN;
  let userData;
  if (context.preview) {
    userData = context.previewData.userData;
  } else {
    userData = defaultUserData;
  }
  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
      userData
    },
  };
};
