import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Input } from '../../components/Input';
import { H1, H2, LightText } from '../../components/Typography';
import { Wrap } from './styled';
import StyleWrapper from '../../components/StyledWrapper';
import { AppState } from '../../store/';
import { connect } from 'react-redux';
import { updateFirstStep } from '../../store/firstStep/actions';
import { FirstStepForm } from '../../common/types';

type Props = {
  stages: Array<FirstStepForm>;
  updateFirstStep: typeof updateFirstStep;
  firstStep: FirstStepForm;
};

const Home: FC<Props> = ({ updateFirstStep, firstStep }) => {
  const router = useRouter();
  return (
    <Wrap>
      <StyleWrapper margin="4rem 0 1rem 0">
        <H1>Začni učit</H1>
      </StyleWrapper>
      <StyleWrapper margin="0 0 8rem 0">
        <LightText>
          Chcete se stát pedagogem? Pomůžeme vám! Zjistěte, jestli musíte ještě
          studovat, než můžete začít učit.
        </LightText>
      </StyleWrapper>
      <H2>Který stupeň chcete učit?</H2>
      <form>
        <StyleWrapper margin="2rem 0">
          {firstStep.map((button, idx) => (
            <Input
              key={idx}
              id={button.id}
              label={button.label}
              name="degree"
              type="radio"
              checked={button.checked}
              onChange={(e) => {}}
              onClick={(e) => {
                updateFirstStep(firstStep, button.id);
              }}
            />
          ))}
        </StyleWrapper>
        <StyleWrapper textAlign="center">
          <Input
            value="Vybrat předměty   >"
            type="button"
            padding="1.5rem 2rem"
            margin="2.5rem 0 0 0"
            onClick={() => {
              router.push('/vyber-predmetu');
            }}
          />
        </StyleWrapper>
      </form>
    </Wrap>
  );
};

const mapStateToProps = (state: AppState) => ({
  firstStep: state.firstStep,
});

export default connect(mapStateToProps, { updateFirstStep })(Home);
