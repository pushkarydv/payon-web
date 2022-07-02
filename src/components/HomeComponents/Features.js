import {
  ClockIcon,
  PresentationChartBarIcon,
  ShieldCheckIcon,
  SwitchVerticalIcon,
} from "@heroicons/react/outline";
import React from "react";
import FeatureContainer from "./FeatureContainer";

export default function Features() {
  return (
    <>
      <div className="my-12 text-2xl px-2 md:text-3xl lg:text-4xl font-medium text-center">
        <span className="underline  underline-offset-8"> Features</span>
      </div>{" "}
      <div className="flex flex-row flex-wrap  justify-center my-12 ">
        <FeatureContainer>
          <SwitchVerticalIcon className="w-24" />
          <div className="text-2xl text-center">Transfer Money</div>
        </FeatureContainer>
        <FeatureContainer>
          <PresentationChartBarIcon className="w-24" />
          <div className="text-2xl text-center">Track Your expences</div>
        </FeatureContainer>
        <FeatureContainer>
          <ShieldCheckIcon className="w-24" />
          <div className="text-2xl text-center">Manage Subscriptions</div>
        </FeatureContainer>
        <FeatureContainer>
          <ClockIcon className="w-24" />
          <div className="text-2xl text-center">Pay bills on Time</div>
        </FeatureContainer>
      </div>
    </>
  );
}
