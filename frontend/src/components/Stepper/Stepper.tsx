import { Wrap, UL, Li, MobileStepperLabel } from './styled';

export const Step = (props) => {
  return (
    <Li
      className={`stepBlock ${props.selected ? 'selectedStep' : ''} ${
        props.previous ? 'previousStep' : ''
      }`}
    >
      <span>{props.label}</span>
    </Li>
  );
};

const customStepper = (props) => {
  const labelArray = [1, 2, 3, 4];

  return (
    <Wrap>
      <UL className="stepWrapper">
        <MobileStepperLabel className="mobileStepperLabel">
          KROK {props.currentStep} ZE 4{' '}
        </MobileStepperLabel>
        {labelArray.map((item, index) => (
          <Step
            key={index}
            index={index}
            label={`KROK ${item} ZE 4`}
            selected={props.currentStep === index + 1}
            previous={
              props.currentStep === index + 2 ||
              props.currentStep === index + 3 ||
              props.currentStep === index + 4
            }
            // updateStep={props.updateStep}
          />
        ))}
      </UL>
    </Wrap>
  );
};

export default customStepper;
