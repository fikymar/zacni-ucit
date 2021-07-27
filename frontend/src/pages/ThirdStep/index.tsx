import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '../../components/Input';
import { H4, H3, LightText, PrimaryText } from '../../components/Typography';
import { Wrap } from './styled';
import StyleWrapper from '../../components/StyledWrapper';
import { AppState } from '../../store/';
import { connect } from 'react-redux';
import {
  setThirdStep,
  setButtonIsDisabled,
} from '../../store/thirdStep/actions';
import {
  ThirdStepForm,
  FirstStepForm,
  SecondStepForm,
} from '../../common/types';
import CustomStepper from '../../components/Stepper';
import { theme } from '../../common/theme';
import { Hint } from '../../components/Hint';

type Props = {
  stages: Array<ThirdStepForm>;
  firstStep: FirstStepForm;
  secondStep: SecondStepForm;
  thirdStep: ThirdStepForm;
  setThirdStep: typeof setThirdStep;
  setButtonIsDisabled: typeof setButtonIsDisabled;
  buttonIsDisabled: boolean;
};

const ThirdStep: FC<Props> = ({
  setThirdStep,
  firstStep,
  secondStep,
  thirdStep,
  setButtonIsDisabled,
  buttonIsDisabled,
}) => {
  const router = useRouter();
  // const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  return (
    <Wrap>
      <CustomStepper activeStep={2} />
      <StyleWrapper margin="0rem 0 2rem 0">
        <H3>Jaké je Vaše vzdělání?</H3>
      </StyleWrapper>
      <H4>
        Vyberte vaše vzdělání, které by mohlo být relevantní pro učení
        <PrimaryText size="16px" marginLeft="5px">
          {secondStep}
        </PrimaryText>{' '}
        na 
        <PrimaryText size="16px">
          {firstStep.chooseDegreeState.map((button, idx) => {
            if (button.checked) {
              return button.label;
            }
          })}
        </PrimaryText>
      </H4>
      <StyleWrapper margin="1rem 0 1rem 0">
        <LightText>
          Vyšší než magisterský stupeň ani maturita bez odborných předmětů
          nejsou pro učitelství podstatné.
        </LightText>
      </StyleWrapper>
      <Hint hintText="Nevíte si rady? Napište nám" />
      <form>
        <StyleWrapper margin="1rem 0">
          {thirdStep.chooseDegreeState.map((button, idx) => (
            <Input
              key={idx}
              id={button.id}
              label={button.label}
              name="degree"
              type="checkbox"
              checked={button.checked}
              onChange={() => {}}
              onClick={() => {
                setThirdStep(thirdStep, button.id);
                setButtonIsDisabled(false);
              }}
            />
          ))}
        </StyleWrapper>
        <StyleWrapper textAlign="center">
          <Input
            value="Pokračovat   >"
            type="button"
            disabled={buttonIsDisabled}
            padding="1rem 2rem"
            margin="2.5rem 0 0 0"
            bgColor={theme.color.primary}
            onClick={() => {
              router.push('/vyber-specializace');
            }}
          />
        </StyleWrapper>
      </form>
    </Wrap>
  );
};

const mapStateToProps = (state: AppState) => ({
  firstStep: state.firstStep,
  secondStep: state.secondStep,
  thirdStep: state.thirdStep,
  buttonIsDisabled: state.thirdStep.buttonIsDisabled,
});

export default connect(mapStateToProps, {
  setThirdStep,
  setButtonIsDisabled,
})(ThirdStep);
