import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import React from "react";

const AddTransformationsTypePage = ({ params: { type } }: SearchParamProps) => {
  const currentTransformation = transformationTypes[type];

  return (
    <>
      <Header
        title={currentTransformation.title}
        subtitle={currentTransformation.subTitle}
      />
      <TransformationForm />
    </>
  );
};

export default AddTransformationsTypePage;
