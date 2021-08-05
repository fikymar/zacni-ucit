import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '../../components/Input';
import { H3, H2, LightText } from '../../components/Typography';
import { Wrap } from './styled';
import StyleWrapper from '../../components/StyledWrapper';
import { AppState } from '../../store/';
import { connect } from 'react-redux';
import {
  updateFirstStep,
  setButtonIsDisabled,
} from '../../store/firstStep/actions';
import { FirstStepForm } from '../../common/types';
import { theme } from '../../common/theme';
import Stepper from '../../components/Stepper/Stepper';
import { Hint } from '../../components/Hint';

type Props = {
  stages: Array<FirstStepForm>;
  updateFirstStep: typeof updateFirstStep;
  firstStep: FirstStepForm;
  setButtonIsDisabled: typeof setButtonIsDisabled;
  buttonIsDisabled: boolean;
};

const Home: FC<Props> = ({
  updateFirstStep,
  firstStep,
  setButtonIsDisabled,
  buttonIsDisabled,
}) => {
  const router = useRouter();
  // const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Wrap>
      <StyleWrapper margin="3rem 0 0rem 0">
        <H2>Chcete se stát učitelem, ale nevíte jak na to?</H2>
      </StyleWrapper>
      <StyleWrapper margin="0.5rem 0 1rem 0">
        <LightText>
          Udělejte další krok na cestě za katedru. Chcete učit? Vyplňte náš
          dotazník a my vám doporučíme seznam potřebných pedagogických
          studijních programů a kurzů, nebo jednoduše zjistíte, že můžete začít
          učit třeba hned.
        </LightText>
      </StyleWrapper>
      <Stepper currentStep={currentStep} />

      <form>
        <H3>Na jakém školním stupni chcete učit?</H3>
        <Hint text="Příběhy učitelů z praxe" />
        <StyleWrapper margin="1rem 0">
          {firstStep.chooseDegreeState.map((button, idx) => (
            <Input
              key={idx}
              id={button.id}
              label={button.label}
              name="degree"
              type="radio"
              checked={button.checked}
              onChange={() => {}}
              onClick={() => {
                updateFirstStep(firstStep, button.id);
                setButtonIsDisabled(false);
              }}
            />
          ))}
        </StyleWrapper>
        <StyleWrapper textAlign="center" padding="0 0 5rem 0">
          <Input
            value="Pokračovat   >"
            type="button"
            disabled={buttonIsDisabled}
            padding="1rem 2rem"
            margin="2.5rem 0 0 0"
            bgColor={theme.color.primary}
            onClick={() => {
              router.push('/vyber-predmetu');
              // nextStep();
            }}
          />
        </StyleWrapper>
      </form>
    </Wrap>
  );
};

const mapStateToProps = (state: AppState) => ({
  firstStep: state.firstStep,
  buttonIsDisabled: state.firstStep.buttonIsDisabled,
});

export default connect(mapStateToProps, {
  updateFirstStep,
  setButtonIsDisabled,
})(Home);
