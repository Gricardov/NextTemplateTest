import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";

export default function about({ userData }) {
  return (
    <ContainerBlock>
      <AboutMe userData={userData} />
    </ContainerBlock>
  );
}

export const getStaticProps = async (context) => {
  let userData;
  if (context.preview) {
    userData = context.previewData.userData;
  } else {
    userData = defaultUserData;
  }
  return {
    props: {
      userData
    },
  };
};

