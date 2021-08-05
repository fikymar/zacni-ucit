import { Wrap, List, ListItem, MobileStepperLabel } from './styled';

const Stepper = ({ currentStep }) => {
  const labelArray = [1, 2, 3, 4];

  return (
    <Wrap>
      <List>
        <MobileStepperLabel className="mobileStepperLabel">
          KROK {currentStep} ZE 4{' '}
        </MobileStepperLabel>
        {labelArray.map((item, index) => (
          <ListItem
            key={index}
            className={`stepBlock ${
              currentStep === index + 1 ? 'selectedStep' : ''
            } ${
              currentStep === index + 2 ||
              currentStep === index + 3 ||
              currentStep === index + 4
                ? 'previousStep'
                : ''
            }`}
          >
            <span>{`KROK ${item} ZE 4`}</span>
          </ListItem>
        ))}
      </List>
    </Wrap>
  );
};

export default Stepper;
