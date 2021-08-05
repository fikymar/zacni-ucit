import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Wrap } from './styled';
import { Select } from '../../components/Select/Select';
import { AppState } from '../../store/';
import { connect } from 'react-redux';
import { setSecondStep } from '../../store/secondStep/actions';
import { FirstStepForm, SecondStepForm } from '../../common/types';
import StyleWrapper from '../../components/StyledWrapper';
import { H3, H2, LightText, PrimaryText } from '../../components/Typography';
import subjects from '../../constants/subjects';
import { Input } from '../../components/Input';
import CustomStepper from '../../components/Stepper/Stepper';
import { theme } from '../../common/theme';
import { Hint } from '../../components/Hint';

type Props = {
  secondStep: SecondStepForm;
  firstStep: FirstStepForm;
  setSecondStep: typeof setSecondStep;
};

const SecondStep: FC<Props> = ({ setSecondStep, secondStep, firstStep }) => {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSecondStep(event.target.value as string);
  };
  return (
    <Wrap>
      <CustomStepper currentStep={2} />
      <StyleWrapper margin="0 0 2rem 0">
        <H3>Jaký předmět chcete učit?</H3>
      </StyleWrapper>
      <PrimaryText size="1rem">
        Pro{' '}
        {firstStep.chooseDegreeState.map((button, idx) => {
          if (button.checked) {
            return button.label;
          }
        })}
      </PrimaryText>
      <StyleWrapper margin="0 0 1rem 0">
        <LightText>Vyberte si prosím pouze jeden předmět.</LightText>
      </StyleWrapper>
      <StyleWrapper margin="0 0 1rem 0">
        <Hint text="Chcete učit více předmětů?" />
        <Hint text="Zjistěte, jaké předměty můžete s vaším vzděláním vyučovat" />
      </StyleWrapper>
      <form>
        <Select name="subject" id="subject" autoFocus aria-label="Subject">
          {subjects.map((subject) => (
            <option value={subject}>{subject}</option>
          ))}
        </Select>
      </form>
      <StyleWrapper textAlign="center">
        <Input
          value="Pokračovat   >"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor={theme.color.primary}
          onClick={() => {
            router.push('/vyber-vzdelani');
          }}
        />
      </StyleWrapper>
      <StyleWrapper textAlign="center" padding="0 0 2rem 0">
        <Hint text="Nevíte si rady s výběrem předmětu? Napište nám" />
      </StyleWrapper>
    </Wrap>
  );
};

const mapStateToProps = (state: AppState) => ({
  secondStep: state.secondStep,
  firstStep: state.firstStep,
});

export default connect(mapStateToProps, { setSecondStep })(SecondStep);
