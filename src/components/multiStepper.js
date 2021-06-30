import React from 'react';
import {Text, View} from 'react-native';

import AnimatedMultistep from 'react-native-animated-multistep';

/* Define the steps  */

// import Step1 from "./steps/step1";
// import Step2 from "./steps/step2";
// import Step3 from "./steps/step3";
// import Step4 from "./steps/step4";

// const allSteps = [
//   { name: "step 1", component: Step1 },
//   { name: "step 2", component: Step2 },
//   { name: "step 3", component: Step3 },
//   { name: "step 4", component: Step4 }
// ];

const Multistepper = () => {
  const onNext = () => {
    console.log('Next');
  };

  const onBack = () => {
    console.log('Back');
  };

  const finish = finalState => {
    console.log(finalState);
  };

  return (
    <View style={{flex: 1}}>
      <AnimatedMultistep
        steps={allSteps}
        onFinish={finish}
        onBack={onBack}
        onNext={onNext}
        comeInOnNext="bounceInUp"
        OutOnNext="bounceOutDown"
        comeInOnBack="bounceInDown"
        OutOnBack="bounceOutUp"
      />
    </View>
  );
};

export default Multistepper;
